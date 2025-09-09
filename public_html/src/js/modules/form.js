class CustomForm {

    parentElement = null;
    pattern = "input[type='checkbox']";
    activeCheckbox = null

    constructor(form) {
        this.setParentElement(form)
    }

    setParentElement(element) {
        this.parentElement = element;

        let checkboxes = this.parentElement.querySelectorAll(this.pattern);
        
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener("click", (e) => {this.__handleCheckboxChange(e)})
        });
    }

    __handleCheckboxChange(event) {
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

    getSelectedCheckboxValue() {
        return this.activeCheckbox ? this.activeCheckbox.value : null;
    }

    getSelectedCheckbox() {
        return this.activeCheckbox;
    }
}

module.exports = { CustomForm };