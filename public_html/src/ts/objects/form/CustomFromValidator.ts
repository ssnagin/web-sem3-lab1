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
        CustomFormValidator.validateR(form);
    }

    static validateX(form : CustomForm) : void {

        if (form.activeButton == null)
            throw new FormValidationError("Выберите X");

    }

    static validateY(form : CustomForm) : void {

        if (form.activeTextField?.value == "")
            throw new FormValidationError("Выберите Y");
    }

    static validateR(form : CustomForm) : void {
        
        let checkboxes : HTMLInputElement[] = form.getActiveCheckboxes();

        if (checkboxes.length == 0)
            throw new FormValidationError("Выберите R");
        
    }
}