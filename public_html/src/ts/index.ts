'use strict'

// const {onCounterUpdate} = require("./modules/counter");

// const {CustomForm} = require("./modules/form/form");

var counterValue: number = 1;


document.addEventListener("DOMContentLoaded", onDOMContentLoaded);

function onDOMContentLoaded() {

    // COUNTER

    const counter: HTMLElement | null = document.getElementById("counter");

    counter?.addEventListener("click", (event) => {
        // counterValue = onCounterUpdate(event, counterValue);
    });

    // FORM

    // const form = new CustomForm(
    //     document.querySelector(".sn-default-form")
    // );
}