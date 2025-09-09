

function onCounterUpdate(event, counterValue) {
    counterValue++;
    event.srcElement.innerHTML = counterValue;
    return counterValue;
}

module.exports = {onCounterUpdate};