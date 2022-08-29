/*
1. add event listener to the case plus button
2. get the value inside the case number field
3. convert the number to the integer
4. calculate the new case number
5. set the value to the case number
*/

function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previouscaseNumber = parseInt(caseNumberString);
    let newCaseNumber;

    if (isIncrease == true) {
        newCaseNumber = previouscaseNumber + 1;
    }
    else {
        newCaseNumber = previouscaseNumber - 1;
        if (newCaseNumber < 0) {
            return 0;
        }
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCasePrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('cease-price');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCasePrice(newCaseNumber);
    calculateSubTotal();

})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCasePrice(newCaseNumber);
    calculateSubTotal();

})