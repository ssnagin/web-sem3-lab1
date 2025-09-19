package com.ssnagin.coordinates.exceptions;

public class PointOutOfBoundsException extends Exception {

    public PointOutOfBoundsException(String message) {
      super(message);
    }

    public PointOutOfBoundsException() {this("Point is out of bounds");}
}
