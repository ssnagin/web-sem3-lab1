package com.ssnagin;

import com.fastcgi.FCGIInterface;

public class WebServer {

    private FCGIInterface fcgiInterface;

    public WebServer(String[] args) {
        fcgiInterface = new FCGIInterface();
    }

    public void launch() {
        while (fcgiInterface.FCGIaccept() >= 0) {
            System.out.println("OK");
        }
    }
}
