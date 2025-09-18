package com.ssnagin.coordinates.builders;

import com.ssnagin.coordinates.geometry.Point2DR;

public class Point2DRBuilder {

    public static Point2DR build(Object xObj, Object yObj, Object RObj) throws NumberFormatException {

        float x = Float.parseFloat(xObj.toString());
        float y = Float.parseFloat(yObj.toString());
        float R = Float.parseFloat(RObj.toString());

        return new Point2DR(x,y,R);

    }
}
