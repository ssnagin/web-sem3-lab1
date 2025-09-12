const {RequestBuilder} = require("../www/requestBuilder.js");
const {Validator} = require("../validation/validation.js");
const {FormValidationError} = require("../validation/errors.js");


class CustomForm {

    rootElement = null;
    errorElement = null;

    checkboxPattern = "input[type='checkbox']";
    activeCheckbox = null

    activeButton = null
    buttonsPattern = "#buttons-single-choice input[type='button']";
    
    activeTextField = null;

    constructor(form) {
        this.setRootElement(form);
    }

    setRootElement(element) {
        this.rootElement = element;

        this.errorElement = document.getElementById("error-field");
        console.log(12345, this.errorElement);
        // CHECKBOXES

        let checkboxes = document.querySelectorAll(this.checkboxPattern);

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("click", (e) => {this.#handleCheckboxChange(e)})
        });

        // BUTTONS

        let buttons = document.querySelectorAll(this.buttonsPattern);

        buttons.forEach(button => {
            button.addEventListener("click", e => {this.#handleActiveButton(e)});
        });       
        
        // TEXT FIELD

        this.activeTextField = document.getElementById("coordY");

        // SUBMIT BUTTON

        document.getElementById("form-submit").addEventListener("click", e => this.submitForm(e));
    }

    #handleCheckboxChange(event) {
        const clickedCheckbox = event.target;

        if (clickedCheckbox.checked) {
            if (this.activeCheckbox && this.activeCheckbox !== clickedCheckbox)
                this.activeCheckbox.checked = false;

            this.activeCheckbox = clickedCheckbox
            return
        }

        if (this.activeCheckbox === clickedCheckbox)
            this.activeCheckbox = null;
    }

    #handleActiveButton(event) {
        const clickedButton = event.target;

        this.activeButton = event.target;
    }

    getSelectedCheckboxValue() {
        return this.activeCheckbox ? this.activeCheckbox.value : null;
    }

    getSelectedCheckbox() {
        return this.activeCheckbox;
    }


    submitForm(event) {

        console.log(event);

        try {
            Validator.validate(this);
        } catch (e) {
            
            if (!e instanceof FormValidationError) return;
            console.log(this.errorElement);
            this.errorElement.innerHTML = e.name + " : " + e.message;
        }

        // var requestData = RequestBuilder.build(this);
    }
}

module.exports = { CustomForm };