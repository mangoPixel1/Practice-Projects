
const submitBtn = document.querySelector('#submitBtn');
const outputElement = document.querySelector('.output');
const finalElement = document.querySelector('.final');

submitBtn.addEventListener("click", function () {
    const val = document.querySelector('#input-box').value; // original input string
    const charArray = Array.from(val); // original input array
    let reverseVal = new Array(charArray.length); // reverse input array
    let reverseIndex = 0;
    if (charArray.length > 0) {
        for (let i = charArray.length-1; i >= 0; i--) {
            reverseVal[reverseIndex] = charArray[i];
            reverseIndex++;
        }
    }

    const result = reverseVal.join('');

    outputElement.innerText = "The reverse of " + "\"" + val + "\"" + " is " + result;
    
    if (!outputElement.classList.contains('visible')) {
        outputElement.classList.remove('hidden');
        outputElement.classList.add('visible');
    }
});