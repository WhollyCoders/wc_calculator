console.log('Hello WhollyCoder...');
////////////////////////////////////////////////////////////////////////////////
var buttonValue, displayValue, characterCount, currentOperation;
var numbers = [];
var operationComplete = false;
var clearButton = document.getElementById('btn-clear');
clearButton.addEventListener('click', function(){
  outputArea.innerHTML = 0;
});

var decimalButton = document.getElementById('btn-decimal');
decimalButton.addEventListener('click', function(e){
  buttonValue = e.target.innerText;
  displayValue = outputArea.innerHTML;
  if(!checkForDecimal()){
    outputArea.innerHTML += buttonValue;
  }
});

var zeroButton = document.getElementById('btn-zero');
zeroButton.addEventListener('click', function(e){
  buttonValue = e.target.innerText;
  displayValue = parseFloat(outputArea.innerHTML);
  if(displayValue == '0'){
    outputArea.innerHTML = buttonValue;
  }else{
    outputArea.innerHTML += buttonValue;
  }
});

var oppositeButton = document.getElementById('btn-opposite');
oppositeButton.addEventListener('click', function(){
  displayValue = outputArea.innerHTML;
  displayValue = parseFloat(displayValue) * -1;
  outputArea.innerHTML = displayValue;
});

var percentButton = document.getElementById('btn-percent');
percentButton.addEventListener('click', function(){
  displayValue = outputArea.innerHTML;
  displayValue = parseFloat(displayValue) / 100;
  outputArea.innerHTML = displayValue;
});

var allOperationButtons = document.getElementsByClassName('btn-operator');
  for(var i = 0; i < allOperationButtons.length; i++){
    allOperationButtons[i].addEventListener('click', function(e){
      currentOperation = e.target.name;
      displayValue = outputArea.innerHTML;
      displayValue = parseFloat(displayValue);
      numbers[0] = displayValue;
      console.log(currentOperation+' operation initiated...');
      console.log('The number '+numbers[0]+' has been stored in memory...');
      clearDisplay();
    });
  }

var equalButton = document.getElementById('btn-equal');
equalButton.addEventListener('click', evaluateExpression);

var outputArea = document.getElementById('output-area');
var allNumberButtons = document.getElementsByClassName('btn-number');
for(var i = 0; i < allNumberButtons.length; i++){
  allNumberButtons[i].addEventListener('click', function(e){
    buttonValue = e.target.innerText;
    displayValue = parseFloat(outputArea.innerHTML);
    if(displayValue == '0'){
      outputArea.innerHTML = buttonValue;
    }else{
      outputArea.innerHTML += buttonValue;
    }
  });
}
