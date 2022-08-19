function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValieString = inputField.value;
    const inputValue = parseFloat(inputValieString);
    inputField.value = '';
    if(isNaN(inputValue) || inputValue < 0){
        alert("Please insert a vaild input");
        return 0;
    } 
    return inputValue;
}

function getElementValueById(elementFieldId) {
    const elementField = document.getElementById(elementFieldId);
    const elmentValueString = elementField.innerText;
    const elementValue = parseFloat(elmentValueString);
    return elementValue;
}

function setTextElementValueById(elementId, element_Value){
    const textElemet = document.getElementById(elementId);
    textElemet.innerText = element_Value;
}