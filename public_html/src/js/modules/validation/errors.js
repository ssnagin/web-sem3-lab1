'use strict'

class FormValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "FormValidationError";
    }
}

module.exports = {FormValidationError};