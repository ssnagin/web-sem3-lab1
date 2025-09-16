'use strict'

import onCounterUpdate from "./modules/counter/counter";
import DOMColoredPoint from "./modules/types/DOMColoredPoint";
import CustomForm from "./objects/form/CustomForm";
import Plane2D from "./objects/plane/Plane2D";

var counterValue: number = 1;


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

    // CANVAS

    const canvases : HTMLCanvasElement | null = document.querySelector(".sn-canvas-container:first-child > div > canvas");

    console.log(canvases);

    let testPlane : Plane2D = new Plane2D(5, canvases!);

    testPlane.throwPoint(new DOMColoredPoint("green", 4, 5));

    testPlane.throwPoint(new DOMColoredPoint("red", 1, 1));
    testPlane.throwPoint(new DOMPoint(5, 4));
    testPlane.throwPoint(new DOMColoredPoint(undefined, 1, 5));
}