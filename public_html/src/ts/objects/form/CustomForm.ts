import FormValidationError from "../../modules/form/errors/FormValidationError";
import { WebServer } from "../../modules/requests/WebServer";
import CustomFormValidator from "./CustomFromValidator";
import FormRequestBuilder from "./FormRequestBuilder";

var requestBuilder : FormRequestBuilder = new FormRequestBuilder();

export default

class CustomForm {

    rootElement : HTMLElement | null = null;
    errorElement : HTMLElement | null = null;

    checkboxPattern = "input[type='checkbox']";

    activeButton : HTMLElement | null = null
    buttonsPattern = "#buttons-single-choice input[type='button']";

    activeTextField : HTMLInputElement | null = null;

    submitButton: HTMLElement | null = null;

    constructor(form: HTMLElement) {
        this.setRootElement(form);
    }

    public setRootElement(element: HTMLElement): void {
        this.rootElement = element;
        this.errorElement = document.getElementById("error-field");

        // BUTTONS

        let buttons: NodeListOf<HTMLElement> | null = document.querySelectorAll(this.buttonsPattern);

        buttons.forEach(button => {
            button.addEventListener("click", (e: MouseEvent) => {this.handleActiveButton(e)});
        });       
        
        // TEXT FIELD

        this.activeTextField = document.querySelector("#CoordY");
        console.log(this.activeTextField);

        // SUBMIT BUTTON

        var submitBtn : HTMLElement | null = document.getElementById("form-submit");
        submitBtn?.addEventListener("click", (e : MouseEvent) => this.submitForm(e));
    }

    private handleActiveButton(event: MouseEvent) {
        console.log(event.target);
        const clickedButton = event.target as HTMLInputElement;
        
        if (clickedButton.value == "reset") {
            this.activeButton = null;
            return;
        }

        this.activeButton = clickedButton;
    }

    getActiveCheckboxes() : Array<HTMLInputElement> {

        let res : HTMLInputElement[] = new Array<HTMLInputElement>;

        let checkboxes : NodeListOf<HTMLInputElement> = document.querySelectorAll("input[type='checkbox']");
        
        if (checkboxes.length == 0) return res;

        checkboxes.forEach((checkbox : HTMLInputElement) => {
            if (checkbox.checked) res.push(checkbox);
        });

        return res;
    }
    
    submitForm(event: MouseEvent) {

        console.log(this.getActiveCheckboxes());

        try {
            CustomFormValidator.validate(this);
            this.errorElement!.innerHTML = "";

        } catch (error) {

            let e : FormValidationError = error as FormValidationError;
            this.errorElement!.innerHTML = e.name + " : " + e.message;
            
        }

        let requestData = requestBuilder.buildJSON(this);
        
        WebServer.send("http://localhost:8080/fcgi-bin/web-sem3-lab1-1.0-SNAPSHOT-all.jar", requestData).then(data => {
            console.log(data);
        });
    }
}