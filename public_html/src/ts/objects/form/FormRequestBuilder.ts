import RequestBuilder from "../../modules/requests/RequestBuilder";
import CustomForm from "./CustomForm";


interface schema {
    x: Number;
    y: Number;
    r: Number;
};

export default

class FormRequestBuilder extends RequestBuilder<CustomForm> {

    public build(form : CustomForm) : object {
        
        let res : {}[] = [];
        let activeCheckboxes = form.getActiveCheckboxes();

        activeCheckboxes.forEach(activeCheckbox => {

            let result : schema  = {x: 0, y: 0, r: 0};

            result.x = Number.parseInt(
                form.activeButton!.getAttribute("value") as string
            );

            result.y = Number.parseFloat(
                form.activeTextField!.value as string
            );
            result.r = Number.parseInt(
                activeCheckbox.value as string
            )

            res.push(result);
        });

        return res;
    }
}