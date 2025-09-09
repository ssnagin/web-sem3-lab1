'use strict'

// const {onDOMContentLoaded} = re

const {onCounterUpdate} = require("./modules/counter");

var counterValue = 1;

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);

function onDOMContentLoaded() {

    const counter = document.getElementById("counter");

    console.log(onCounterUpdate);
    
    counter.addEventListener("click", (event) => {counterValue = onCounterUpdate(event, counterValue)});

    const checkboxes = document.querySelectorAll("input[id='checkbox*']");
    console.log(checkboxes);
}