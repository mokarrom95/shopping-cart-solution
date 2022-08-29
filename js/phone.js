
function updatePhoneNumber(isIncrease) {
    const phoneInputField = document.getElementById('phone-number-field');
    const previousPhoneNumberStr = phoneInputField.value;
    const previousPhoneNumber = parseInt(previousPhoneNumberStr);
    let newphoneNumber
    if (isIncrease == true) {
        newphoneNumber = previousPhoneNumber + 1;
    }
    else {
        newphoneNumber = previousPhoneNumber - 1;
        if (newphoneNumber < 0) {
            return 0;
        }
    }

    phoneInputField.value = newphoneNumber;
    return newphoneNumber;
}

function updateNewPhonePrice(newphoneNumber) {
    const phoneTotalPrice = newphoneNumber * 1219;
    const phoneTotalPriceElement = document.getElementById('phone-price');
    phoneTotalPriceElement.innerText = phoneTotalPrice;
}



document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newphoneNumber = updatePhoneNumber(true);
    updateNewPhonePrice(newphoneNumber);

    // calculate total
    calculateSubTotal();

})
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newphoneNumber = updatePhoneNumber(false);
    updateNewPhonePrice(newphoneNumber);

    calculateSubTotal();
})