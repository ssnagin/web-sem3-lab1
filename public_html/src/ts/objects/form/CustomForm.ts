import FormValidationError from "../../modules/form/errors/FormValidationError";
import CustomFormValidator from "./CustomFromValidator";

export default

class CustomForm {
    rootElement : HTMLElement | null = null;
    errorElement : HTMLElement | null = null;

    checkboxPattern = "input[type='checkbox']";
    activeCheckbox : HTMLInputElement | null = null

    activeButton : HTMLElement | null = null
    buttonsPattern = "#buttons-single-choice input[type='button']";

    activeTextField : HTMLElement | null = null;

    submitButton: HTMLElement | null = null;

    constructor(form: HTMLElement) {
        this.setRootElement(form);
    }

    public setRootElement(element: HTMLElement): void {
        this.rootElement = element;

        this.errorElement = document.getElementById("error-field");
        console.log(12345, this.errorElement);
        // CHECKBOXES

        let checkboxes: NodeListOf<HTMLElement> | null = document.querySelectorAll(this.checkboxPattern);

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("click", (e: MouseEvent) => {this.handleCheckboxChange(e)})
        });

        // BUTTONS

        let buttons: NodeListOf<HTMLElement> | null = document.querySelectorAll(this.buttonsPattern);

        buttons.forEach(button => {
            button.addEventListener("click", (e: MouseEvent) => {this.handleActiveButton(e)});
        });       
        
        // TEXT FIELD

        this.activeTextField = document.getElementById("coordY");

        // SUBMIT BUTTON

        var submitBtn : HTMLElement | null = document.getElementById("form-submit");

        submitBtn?.addEventListener("click", e => this.submitForm(e));
    }

    private handleCheckboxChange(event: MouseEvent) {

        const clickedCheckbox = event.target as HTMLInputElement;

        if (clickedCheckbox.checked) {
            if (this.activeCheckbox && this.activeCheckbox !== clickedCheckbox)
                this.activeCheckbox.checked = false;

            this.activeCheckbox = clickedCheckbox
            return
        }

        if (this.activeCheckbox === clickedCheckbox)
            this.activeCheckbox = null;
    }

    private handleActiveButton(event: MouseEvent) {
        const clickedButton = event.target;

        this.activeButton = event.target as HTMLElement;
    }

    getSelectedCheckboxValue() {
        return this.activeCheckbox ? this.activeCheckbox.value : null;
    }

    getSelectedCheckbox() {
        return this.activeCheckbox;
    }


    submitForm(event: MouseEvent) {

        // console.log(event);

        try {
            CustomFormValidator.validate(this);


        } catch (error) {

            // let e : FormValidationError = error as FormValidationError;
        
            // if (this.errorElement == null) return;
            // this.errorElement.innerHTML = e.name + " : " + e.message;
        }

        // var requestData = RequestBuilder.build(this);
    }
}