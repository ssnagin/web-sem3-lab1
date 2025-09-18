package com.ssnagin;

import com.fastcgi.FCGIInterface;

import java.nio.charset.StandardCharsets;

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

            

            String resp = "[\"OK\"]";
            String otvet = TEST.formatted(resp.getBytes(StandardCharsets.UTF_8).length, resp);

            System.out.println(otvet);
        }
    }
}
