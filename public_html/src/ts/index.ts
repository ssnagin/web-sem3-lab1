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

    // CANVASES

    const canvases : NodeListOf<HTMLCanvasElement> | null = document.querySelectorAll(".sn-canvas-container > div > canvas");
    var planes : Plane2D[] = []; // Ordered from r=1 to r=5

    for (let i = 0; i < canvases.length; i++) {
        let plane : Plane2D = new Plane2D(i + 1, canvases.item(i));
        planes.push(plane);
    }

    // testPlane.throwPoint(new DOMColoredPoint("green", 4, 5));

    // testPlane.throwPoint(new DOMColoredPoint("red", 1, 1));
    // testPlane.throwPoint(new DOMPoint(5, 4));
    // testPlane.throwPoint(new DOMColoredPoint(undefined, 1, 5));
}