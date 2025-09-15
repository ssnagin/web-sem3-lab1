export default

function onCounterUpdate(event: MouseEvent, counterValue: number): number {
    counterValue++;
    const target = event.target as HTMLElement;

    target.innerHTML = counterValue.toString();
    return counterValue;
}