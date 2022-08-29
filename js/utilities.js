function getCurrentPhoneTotal(elementId) {
    const currentPhoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalstr = currentPhoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalstr);
    return currentPhoneTotal;
}

function setTextElementValueById(elementId, value) {
    const newSubTotal = document.getElementById(elementId);
    newSubTotal.innerText = value;

}

function calculateSubTotal() {
    const currentPhoneTotal = getCurrentPhoneTotal('phone-price');
    const currentCaseTotal = getCurrentPhoneTotal('cease-price')
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal);

    // calculate tax
    const taxAmountStr = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountStr);
    setTextElementValueById('tax-amount', taxAmount);

    // calculate final total
    const finalTotal = currentSubTotal + taxAmount;
    setTextElementValueById('fianl-total', finalTotal);
}