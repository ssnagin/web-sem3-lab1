'use strict'

var counterValue = 1;

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);

function onDOMContentLoaded() {

    const counter = document.getElementById("counter");
    counter.addEventListener("click", (event) => {onCounterUpdate(event)});

}

function onCounterUpdate(event) {
    counterValue++;
    event.srcElement.innerHTML = counterValue;
}