'use strict'

const {onCounterUpdate} = require("./modules/counter");

const {CustomForm} = require("./modules/form/form");

var counterValue = 1;


document.addEventListener("DOMContentLoaded", onDOMContentLoaded);

function onDOMContentLoaded() {

    // COUNTER

    const counter = document.getElementById("counter");

    counter.addEventListener("click", (event) => {
        counterValue = onCounterUpdate(event, counterValue);
    });

    // FORM

    const form = new CustomForm(
        document.querySelector(".sn-default-form")
    );
}