export default

abstract class RequestBuilder<T> {
    abstract build(data : any) : object;

    public buildJSON(data : T) : string {
        return JSON.stringify(this.build(data));
    }
}