import ElementController from "../../modules/ElementController";
import FormValidationError from "../../modules/form/errors/FormValidationError";
import { RequestManager } from "../../modules/requests/RequestManager";
import { WebServer } from "../../modules/requests/WebServer";
import { CustomFormFormatter } from "./CustomFormFormatter";
import CustomFormValidator from "./CustomFromValidator";
import FormRequestBuilder from "./FormRequestBuilder";

var requestBuilder : FormRequestBuilder = new FormRequestBuilder();


export default 

class CustomForm implements ElementController<HTMLElement> {

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
        this.activeTextField?.addEventListener("input", (e) => {
            CustomFormFormatter.formatFloatUserInput(e.target as HTMLInputElement);
        });

        // SUBMIT BUTTON

        var submitBtn : HTMLElement | null = document.getElementById("form-submit");
        submitBtn?.addEventListener("click", (e : MouseEvent) => this.submitForm(e));
    }

    private handleActiveButton(event: MouseEvent) {

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
    
    public submitForm(event: MouseEvent) {

        try {
            CustomFormValidator.validate(this);
            this.errorElement!.innerHTML = "";

        } catch (error) {

            let e : FormValidationError = error as FormValidationError;
            this.errorElement!.innerHTML = e.name + " : " + e.message;
            
            return;
        }

        let requestData = requestBuilder.buildJSON(this);

        console.log("REQUEST DATA : ", requestData);
        
        RequestManager.getInstance().sendRequest("/fcgi-bin/server.jar", requestData);
        // .then(data => {
        //     const event : CustomEvent = new CustomEvent("sn-form-response", {
        //         detail: data
        //     });

        //     try {
        //         document.dispatchEvent(event);
        //     } catch (e) {
        //         console.error("COULD NOT THROW EVENT", event);
        //     }

        // }).catch(error => {
        //     console.log(error);
        // });

        // WebServer.send("/fcgi-bin/server.jar", requestData).then(data => {

        //     const event : CustomEvent = new CustomEvent("sn-form-response", {
        //         detail: data
        //     });

        //     try {
        //         document.dispatchEvent(event);
        //     } catch (e) {
        //         console.error("COULD NOT THROW EVENT", event);
        //     }

        // }).catch(error => {
        //     console.log(error);
        // });
    }
}

