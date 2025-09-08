

function onCounterUpdate(event) {
    counterValue++;
    event.srcElement.innerHTML = counterValue;
}

module.exports = {onCounterUpdate};