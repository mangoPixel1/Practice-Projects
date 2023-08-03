const inputBox = document.querySelector('#inputBox');
const listContainer = document.querySelector('#list-container');
const addBtn = document.querySelector('#addBtn');

addBtn.addEventListener("click", function () {
    if (inputBox.value == "") {
        alert('Enter a valid string');
    } else {
        let li = document.createElement('li');
        let itemText = document.createElement('span');
        itemText.innerHTML = inputBox.value;
        itemText.classList.add('itemText');
        li.appendChild(itemText);
        
        let span = document.createElement('span');
        span.classList.add("fa-solid");
        span.classList.add("fa-x");
        span.classList.add("removeBtn");
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
});

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        //e.target.classList.toggle("checked");
        e.target.firstChild.classList.toggle("checked");
    } else if (e.target.classList.contains("removeBtn")) {
        e.target.parentElement.remove();
    }
});