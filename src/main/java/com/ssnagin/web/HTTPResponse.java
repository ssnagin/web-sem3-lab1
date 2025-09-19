package com.ssnagin.web;


import lombok.Getter;
import lombok.Setter;

import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.LinkedList;

public class HTTPResponse {

    private static final String HEADER_TITLE = "HTTP/1.1";
    private static final String CONTENT_LENGTH = "Content-Length : %d";

    @Getter
    @Setter
    private String content = "";

    @Getter
    @Setter
    private ServerCode serverCode = ServerCode.OK;

    private LinkedList<HTTPHeader> headers = new LinkedList<>();

    public void setHeaders(HTTPHeader ...headers) {
        Collections.addAll(this.headers, headers);
    }

    public void setHeader(HTTPHeader header) {
        this.headers.add(header);
    }

    public HTTPHeader getHeader(String name) {
        for (HTTPHeader header : headers) {
            if (header.getName().equalsIgnoreCase(name)) {
                return header;
            }
        }
        return null;
    }

    public String build() {
        StringBuilder builder = new StringBuilder();

        builder.append(HEADER_TITLE + " ");
        builder.append(serverCode.getFullCode() + "\n");

        for (HTTPHeader header : headers) {
            builder.append(header.getName()).append(": ").append(header.getValue()).append("\r\n");
        }
        builder
                .append(CONTENT_LENGTH.formatted(content.getBytes(StandardCharsets.UTF_8).length))
                .append("\n\n")
                .append(content);

        return builder.toString();
    }
}
