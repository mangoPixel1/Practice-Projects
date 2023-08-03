function changeColor (elem, newColor) {
    elem.style.color = newColor;
}

let newItem = document.createElement('li');
let newItemText = document.createTextNode('OnePlus');
newItem.appendChild(newItemText);

let ul = document.querySelector('#list > ul');
ul.appendChild(newItem);

let items = document.querySelectorAll('li');

items[0].style.color = '#d43737';
items[1].style.color = '#f59842';
items[2].style.color = '#cee635';
items[3].style.color = '#2ec965';

changeColor(items[0], );
changeColor(items[1], );
changeColor(items[2], );

for (let i = 0; i < items.length; i++) {
    items[i].style.fontWeight = 'bold';
    items[i].style.fontSize = '24px';
}

// delete one item from list
//items[3].remove();

// delete all items from list
//ul.innerHTML = '';

// delete the entire ul element and its children
//ul.remove();

// Traversing the DOM
/*const itemsList = document.querySelector('ul');
console.log(itemsList.firstElementChild);
console.log(itemsList.lastElementChild);*/

// Events and Event Listeners
// Button 2 click event
function alertBtnClick() {
    alert('Executed from FUNCTION');
}
const buttonTwo = document.querySelector('.btn2');
buttonTwo.addEventListener("click", alertBtnClick);



// Button 3 mouseover and mouseout event
const buttonThree = document.querySelector('.btn3');

function changeBGColor() {
    buttonThree.style.backgroundColor = '#454545';
    buttonThree.style.color = '#e6e6e6';
}

buttonThree.addEventListener("mouseover", changeBGColor);
buttonThree.addEventListener("mouseout", function () {
    buttonThree.style.backgroundColor = '#ababab';
    buttonThree.style.color = '#2b2b2b'
});



// Show Hidden Content Button click event
const visibilityBtn = document.querySelector('.visibility-btn');
const secretContent = document.querySelector('.secret-content');

function toggleVisibilty() {
    if (secretContent.classList.contains('content-invisible')) { //content is hidden
        secretContent.classList.remove('content-invisible');
        visibilityBtn.textContent = 'Hide Content';
    } else {
        secretContent.classList.add('content-invisible'); // content is shown
        secretContent.classList.
        visibilityBtn.textContent = 'Show Content';
    }
}

visibilityBtn.addEventListener("click", toggleVisibilty);

const buttonFour = document.querySelector('.btn4');
buttonFour.addEventListener("click", e => {
    console.log(e);
}, { once: true });

buttonFour.addEventListener("click", function (e) {
    console.log(e);
}, { once: true });


const football = document.querySelector('.football');
football.textContent = "Soccer";
football.classList.add('red');