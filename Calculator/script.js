const resultText = document.querySelector('#result-text'); // displays input and result
const clearBtn = document.querySelector('#clear-button'); // clears the resultArea
const buttonArea = document.querySelector('.buttons');

let resultDisplayed = false; // flag for indicating when a calculation is complete and result is shown

buttonArea.addEventListener('click', function(e) {
    let currentExpr = resultText.innerHTML; // holds the current expression that the user has typed in
    let lastChar = currentExpr[currentExpr.length-1]; // last char of input for checking validity of input
    let target = e.target; // the event object that the user has clicked
    
    if (target.classList.contains('button')) { // if a button was clicked
        if (target.classList.contains('equal')) {
            if (!isNaN(lastChar)) {
                resultText.innerHTML = eval(currentExpr);
                resultDisplayed = true;
            }
            return;
        }

        if (resultDisplayed) {
            resultText.innerHTML = "0";
            resultDisplayed = false;
            currentExpr = resultText.innerHTML;
        }

        if (!isNaN(target.innerHTML) || target.innerHTML == '.') { // button clicked is an number
            if (currentExpr == "0") { // default state
                resultText.innerHTML = target.innerHTML; // replace resultText with value clicked
            } else {
                resultText.innerHTML += target.innerHTML; // add the value to the result-text
            }
        } else { // button clicked is an operator
            if (currentExpr == "0") {
                return;
            } else if (isNaN(lastChar)) {
                return;
            } else {
                resultText.innerHTML += target.innerHTML;
            }
        }
    }
});

clearBtn.addEventListener("click", function() {
    resultText.innerHTML = "0";
    resultDisplayed = false;
});