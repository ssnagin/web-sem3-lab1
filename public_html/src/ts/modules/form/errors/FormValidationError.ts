class FormValidationError extends Error {
    constructor(message: any) {
        super(message);
        this.name = "FormValidationError";
    }
}

module.exports = {FormValidationError};