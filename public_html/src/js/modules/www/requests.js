'use strict'

const { FormValidationError } = require("../validation/errors.js");
const {RequestBuilder} = require("./requestBuilder.js");

function send(form) {
    try {
        
    } catch (e) {
        console.log(e);
        
        if (!(e instanceof FormValidationError)) return;
        form.errorElement.innerHTML = e.name + " : " + e.message;
    }
}