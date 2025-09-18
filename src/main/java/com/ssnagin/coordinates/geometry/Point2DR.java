package com.ssnagin.coordinates.geometry;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Point2DR {
    private float x;
    private float y;
    private float R;

    public Point2DR(float x, float y, float R) {
        this.x = x;
        this.y = y;
        this.R = R;
    }
    public Point2DR() {this(0,0,0);}

}
