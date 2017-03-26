function addValueToDisplay(){
  if(getCharacterCount() <= 10){
    if(displayValue !== 0)
    {
      outputArea.innerHTML += buttonValue;
    }else
    {
      if(getButtonValue() != '.')
      {
        outputArea.innerHTML = buttonValue;
      }else
      {
        outputArea.innerHTML += buttonValue;
      }
    }
  }

}

function getDisplayValue(){
  displayValue = outputArea.innerHTML;
  return displayValue;
}

function getButtonValue(e){
  buttonValue = e.target.innerText;
  return buttonValue;
}

function checkForDecimal(){
  displayValue = getDisplayValue();
  if(displayValue.includes('.')){
    return true;
  }else{
    return false;
  }
}

function checkForZero(){
  displayValue = getDisplayValue();
  if(displayValue == 0){
    return true;
  }else{
    return false;
  }
}

function clearDisplay(){
  outputArea.innerHTML = '0';
}

function evaluateExpression(){
    displayValue = outputArea.innerHTML;
    displayValue = parseFloat(displayValue);
    numbers[1] = displayValue;
    switch(currentOperation) {
      case 'addition':
          outputArea.innerHTML = parseFloat(numbers[0] + numbers[1]);
          break;
      case 'subtraction':
          outputArea.innerHTML = parseFloat(numbers[0] - numbers[1]);
          break;
      case 'multiplication':
          outputArea.innerHTML = parseFloat(numbers[0] * numbers[1]);
          break;
      case 'division':
          outputArea.innerHTML = parseFloat(numbers[0] / numbers[1]);
          break;
      default:
          console.log('There has been an error...');
  }
}
