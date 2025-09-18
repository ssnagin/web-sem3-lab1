package com.ssnagin.coordinates.validator;

import com.ssnagin.coordinates.geometry.Point2DR;
import com.ssnagin.coordinates.exceptions.PointOutOfBoundsException;

public class CoordsValidator {

    public static void validate(Point2DR point2DR) throws PointOutOfBoundsException {

        // x > 0 and y < 0

        if (point2DR.getX() > 0 && point2DR.getY() < 0) throw new PointOutOfBoundsException();

        // y  = -2x + R

        if (point2DR.getY() > -2* point2DR.getX() + point2DR.getR())
            throw new PointOutOfBoundsException();

        // x = -R and y = R

        if (point2DR.getX() < -point2DR.getR() || point2DR.getY() > point2DR.getR())
            throw new PointOutOfBoundsException();

        // x^2 + y^2 = R^2

        if (point2DR.getX() <= 0 && point2DR.getY() <= 0) {
            if ( Math.pow(point2DR.getX(),2) + Math.pow(point2DR.getY(),2) > Math.pow(point2DR.getR(),2))
                throw new PointOutOfBoundsException();
        }
    }
}
