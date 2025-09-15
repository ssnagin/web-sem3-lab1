'use strict'

import onCounterUpdate from "./modules/counter/counter";
import CustomForm from "./objects/form/CustomForm";

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

    
}