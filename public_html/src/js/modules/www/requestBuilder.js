class RequestBuilder {
    
    static schema = {
        coordinates: {
            x: 0.0,
            y: 0.0,
            z: 0.0
        }
    }

    constructor() {
        
    }

    static build(form) {
        let result = RequestBuilder.schema;

        result.coordinates.x = form.activeButton.value;
        result.coordinates.y = form.activeTextField.value;
    }
    
}

module.exports = {RequestBuilder};