console.log('Hello WhollyCoder...');
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
  if(displayValue == '0'){
    return true;
  }else{
    return false;
  }
}

function getCharacterCount(){
  displayValue = getDisplayValue();
  characterCount = displayValue.length;
  return characterCount;
}

function addButtonValue(){
  displayValue += buttonValue;
}
function replaceButtonValue(){
  displayValue = buttonValue;
}

////////////////////////////////////////////////////////////////////////////////
var buttonValue, displayValue, characterCount;
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
zeroButton.addEventListener('click', function(){
  if(!checkForZero()){
    outputArea.innerHTML += 0;
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

var equalButton = document.getElementById('btn-equal');
equalButton.addEventListener('click', function(){
  displayValue = outputArea.innerHTML;
  displayValue = parseFloat(displayValue) / 100;
  outputArea.innerHTML = displayValue;
});

var outputArea = document.getElementById('output-area');
var allNumberButtons = document.getElementsByClassName('btn-number');
for(var i = 0; i < allNumberButtons.length; i++){
  allNumberButtons[i].addEventListener('click', function(e){
    buttonValue = e.target.innerText;
    displayValue = outputArea.innerHTML;
    if(checkForZero() && displayValue != '0.'){
      outputArea.innerHTML = buttonValue;
    }else{
      outputArea.innerHTML += buttonValue;
    }
  });
}
