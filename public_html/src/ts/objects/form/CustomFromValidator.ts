// const {Validator } = require("../../modules/validation/Validation");

import Validator from "../../modules/validation/Validation";
import CustomForm from "./CustomForm";
import FormValidationError from "../../modules/form/errors/FormValidationError";

export default

class CustomFormValidator extends Validator {


    constructor() {super()}

    static override validate(form : CustomForm) : void {
        CustomFormValidator.validateX(form);
        CustomFormValidator.validateY(form);
        CustomFormValidator.validateZ(form);
    }

    static validateX(form : CustomForm) : void {

        if (form.activeButton == null)
            throw new FormValidationError("Выберите X");

        console.log(form.activeButton);
    }

    static validateY(form : CustomForm) : void {

        if (form.activeTextField?.innerText == null)
            throw new FormValidationError("Выберите Y");

        console.log(form.activeTextField);
    }

    static validateZ(form : CustomForm) : void {
  
    }
}