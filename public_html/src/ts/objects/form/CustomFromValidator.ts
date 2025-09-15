// const {Validator } = require("../../modules/validation/Validation");

import Validator from "../../modules/validation/Validation";
import CustomForm from "./CustomForm";
import FormValidationError from "../../modules/form/errors/FormValidationError";

export default

class CustomFormValidator extends Validator {


    constructor() {super()}

    static override validate(form : CustomForm) : void {
        CustomFormValidator.validateX(form);
    }

    static validateX(form : CustomForm) : void {

        

        // if (form.activeButton == null)
        //     throw new FormValidationError("Выберите X");

        // console.log(form.activeButton);

        // if (!(Number.isInteger(form.activeButton)))
        //     throw new FormValidationError("X должен быть числом");
    }
}