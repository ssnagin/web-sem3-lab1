'use strict'

import onCounterUpdate from "./modules/counter/counter";
import DOMColoredPoint from "./modules/types/DOMColoredPoint";
import CustomForm from "./objects/form/CustomForm";
import { Coordinates, FormResponseData } from "./objects/form/FormResponseData";
import Plane2D from "./objects/plane/Plane2D";
import PlaneManager from "./objects/plane/PlaneManager";

var counterValue: number = 1;

var planes : PlaneManager = new PlaneManager();

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);

function onDOMContentLoaded() {

    // COUNTER

    const counter: HTMLElement | null = document.getElementById("counter");

    counter?.addEventListener("click", (event) => {
        counterValue = onCounterUpdate(event, counterValue);
    });

    // FORM

    const defaultForm : HTMLElement | null = document?.querySelector(".sn-default-form");

    const form = new CustomForm(
        defaultForm!
    );

    // CANVASES

    const canvases : NodeListOf<HTMLCanvasElement> | null = document.querySelectorAll(".sn-canvas-container > div > canvas");

    

    for (let i = 0; i < canvases.length; i++) {
        let plane : Plane2D = new Plane2D(i + 1, canvases.item(i));
        planes.add(plane);

        // plane.throwPoint(new DOMColoredPoint("green", 4, 5));
        // plane.throwPoint(new DOMColoredPoint("red", 1, 1));
        // plane.throwPoint(new DOMPoint(5, 4));
        // plane.throwPoint(new DOMColoredPoint(undefined, 1, 5));
    }

}

document.addEventListener("sn-form-response", (event : Event) => {

    const response : XMLHttpRequest = (event as CustomEvent).detail;
    
    const data : FormResponseData = JSON.parse(response.responseText);

    if (data.status != "ok") return;

    const coordinates : Coordinates[] = data.coordinates;

    let plane : Plane2D;
    let prepared : DOMColoredPoint;

    coordinates.forEach(coordinate => {

        prepared = new DOMColoredPoint();
        
        prepared.color = Plane2D.POINT_HIT_COLOR;
        prepared.x = Number.parseFloat(coordinate.x);
        prepared.y = Number.parseFloat(coordinate.y);

        console.log("THROWING POINT : ", prepared, plane, Number.parseInt((coordinate.r as string)) - 1, planes, coordinate);

        plane = planes.get(
            Number.parseInt((coordinate.r as string)) - 1
        );

        if (coordinate.result == "miss") {
            prepared.color = Plane2D.POINT_MISS_COLOR;
        }

        plane.throwPoint(prepared);
    });
});