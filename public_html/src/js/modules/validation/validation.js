const {FormValidationError} = require("./errors.js");

class Validator {

    static schema = {
        x: Number,
        y: Number,
        z: Number
    };


    static validate(form) {

        Validator.validateX(form);
        Validator.validateY(form);
        Validator.validateZ(form);
    }

    static validateX(form) {

        if (form.activeButton == null)
            throw new FormValidationError("Выберите X");

        console.log(form.activeButton.value);

        if (!(Number.isInteger(form.activeButton.value)))
            throw new FormValidationError("X должен быть числом");
    }

    static validateY(form) {

    }

    static validateZ(form) {

    }
}

module.exports = { Validator }