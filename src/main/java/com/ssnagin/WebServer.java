package com.ssnagin;

import com.fastcgi.FCGIInterface;
import com.ssnagin.coordinates.builders.Point2DRBuilder;
import com.ssnagin.coordinates.exceptions.PointOutOfBoundsException;
import com.ssnagin.coordinates.geometry.Point2DR;
import com.ssnagin.coordinates.validator.CoordsValidator;
import com.ssnagin.web.HTTPResponse;
import com.ssnagin.web.ServerCode;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.time.LocalDateTime;
import java.util.LinkedList;

public class WebServer {

    private FCGIInterface fcgiInterface;

    private static String TEST = """
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: %d


%s
        """;

    public WebServer(String[] args) {
        fcgiInterface = new FCGIInterface();
    }

    public void launch() {
        while (fcgiInterface.FCGIaccept() >= 0) {
            handleIncomingTraffic();
        }
    }

    protected void handleIncomingTraffic() {

        String method = FCGIInterface.request.params.getProperty("REQUEST_METHOD");
        if (!method.equals("POST")) return;

        HTTPResponse response = new HTTPResponse();

        JSONObject jsonResponse = new JSONObject();
        JSONArray jsonResponseCoordinates = new JSONArray();

        jsonResponse.put("time", LocalDateTime.now());
        jsonResponse.put("status", "ok");

        String requestData = "";
        LinkedList<Point2DR> points2DR = new LinkedList<>();

        try {
            requestData = readRequestBody();

            JSONObject jsonRequest = new JSONObject(requestData);
            JSONArray coordinateArray = jsonRequest.getJSONArray("coordinates");

            String x, y, R;
            Point2DR point2DR;

            for (int i = 0; i < coordinateArray.length(); i++) {
                JSONObject pointObj = coordinateArray.getJSONObject(i);
                x = pointObj.getString("x");
                y = pointObj.getString("y");
                R = pointObj.getString("R");

                points2DR.add(
                        Point2DRBuilder.build(x,y,R)
                );
            }

        } catch (IOException e) {
            jsonResponse.put("status", "error");
            jsonResponse.put("message", "Error reading request body : " + e.getMessage());
            response.setServerCode(ServerCode.BAD_REQUEST);
        } catch (NumberFormatException e) {
            jsonResponse.put("status", "error");
            jsonResponse.put("message", "Received broken coords!!! " + e.getMessage());
            response.setServerCode(ServerCode.BAD_REQUEST);
        } catch (JSONException e) {
            jsonResponse.put("status", "error");
            jsonResponse.put("message", "Error parsing JSON: " + e.getMessage());
            response.setServerCode(ServerCode.BAD_REQUEST);
        }

        for (Point2DR point : points2DR) {

            JSONObject jsonPoint = new JSONObject();

            jsonPoint.put("x", point.getX());
            jsonPoint.put("y", point.getY());
            jsonPoint.put("R", point.getR());

            try {
                CoordsValidator.validate(point);
                jsonPoint.put("result", "hit");
            } catch (PointOutOfBoundsException e) {
                jsonPoint.put("result", "miss");
            }

            jsonResponseCoordinates.put(jsonPoint);
        }

        jsonResponse.put("coordinates", jsonResponseCoordinates);

        response.setContent(jsonResponse.toString());
        System.out.println(response.build());
    }

    private static String readRequestBody() throws IOException {
        String contentLengthStr = FCGIInterface.request.params.getProperty("CONTENT_LENGTH");
        int contentLength = contentLengthStr != null ? Integer.parseInt(contentLengthStr) : 0;

        if (contentLength <= 0) {
            return "";
        }

        byte[] bytes = new byte[contentLength];
        int totalRead = 0;

        while (totalRead < contentLength) {
            int bytesRead = FCGIInterface.request.inStream.read(bytes, totalRead, contentLength - totalRead);
            if (bytesRead == -1) {
                throw new IOException("Premature end of stream");
            }
            totalRead += bytesRead;
        }

        return new String(bytes, StandardCharsets.UTF_8);
    }
}
