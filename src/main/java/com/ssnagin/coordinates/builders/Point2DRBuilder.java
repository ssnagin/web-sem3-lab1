package com.ssnagin.coordinates.builders;

import com.ssnagin.coordinates.geometry.Point2DR;

import java.math.BigDecimal;

public class Point2DRBuilder {

    public static Point2DR build(Object xObj, Object yObj, Object RObj) throws NumberFormatException {

////        float x = Float.parseFloat();
//        float y = Float.parseFloat(yObj.toString());
//        float R = Float.parseFloat(RObj.toString());

        BigDecimal x = new BigDecimal(xObj.toString());
        BigDecimal y = new BigDecimal(xObj.toString());
        BigDecimal R = new BigDecimal(xObj.toString());

        if (y.compareTo(new BigDecimal("3")) > 0) {
            throw new NumberFormatException("!!");
        }

        return new Point2DR(x.floatValue(),y.floatValue(),R.floatValue());
    }
}
