const data = [
    {
        "category": "Reaction",
        "score": 80,
        "icon": "images/icon-reaction.svg"
    },
    {
        "category": "Memory",
        "score": 92,
        "icon": "images/icon-memory.svg"
    },
    {
        "category": "Verbal",
        "score": 61,
        "icon": "images/icon-verbal.svg"
    },
    {
        "category": "Visual",
        "score": 72,
        "icon": "images/icon-visual.svg"
    }
];

// Calculate and display the main result - average of scores in each category
let sumOfScores = 0;
for (let i = 0; i < data.length; i++) {
    sumOfScores += data[i].score;
}

let finalScore = Math.round(sumOfScores / data.length);

document.querySelector('.result-score').textContent = finalScore;

let currentCategory = document.querySelector('.reaction'); // .summary-item
let currentCategoryText = currentCategory.firstElementChild; // .summary-text
let currentCategoryScore = currentCategoryText.nextElementSibling.firstElementChild; //.summary-num

for (let i = 0; i < data.length; i++) {
    let icon = document.createElement('img');
    icon.setAttribute('src', data[i].icon);
    
    let text = document.createTextNode(data[i].category);

    currentCategoryText.appendChild(icon);
    currentCategoryText.appendChild(text);
    currentCategoryScore.textContent = data[i].score;

    // Point variables to next summary-item sibling
    if (!currentCategory.nextElementSibling) {
        break;
    }
    currentCategory = currentCategory.nextElementSibling;
    currentCategoryText = currentCategory.firstElementChild;
    currentCategoryScore = currentCategoryText.nextElementSibling.firstElementChild;
}

// Reaction
/*let reactionIcon = document.createElement('img');
reactionIcon.setAttribute('src', data[0].icon);
let categoryText = document.createTextNode(data[0].category);
document.querySelector('.reaction .summary-text').appendChild(reactionIcon);
document.querySelector('.reaction .summary-text').appendChild(categoryText);
document.querySelector('.reaction .summary-num').textContent = data[0].score;

// Memory
let memoryIcon = document.createElement('img');
memoryIcon.setAttribute('src', data[1].icon);
categoryText = document.createTextNode(data[1].category);
document.querySelector('.memory .summary-text').appendChild(memoryIcon);
document.querySelector('.memory .summary-text').appendChild(categoryText);
document.querySelector('.memory .summary-num').textContent = data[1].score;

// Verbal
let verbalIcon = document.createElement('img');
verbalIcon.setAttribute('src', data[2].icon);
categoryText = document.createTextNode(data[2].category);
document.querySelector('.verbal .summary-text').appendChild(verbalIcon);
document.querySelector('.verbal .summary-text').appendChild(categoryText);
document.querySelector('.verbal .summary-num').textContent = data[2].score;

// Visual
let visualIcon = document.createElement('img');
visualIcon.setAttribute('src', data[3].icon);
categoryText = document.createTextNode(data[3].category);
document.querySelector('.visual .summary-text').appendChild(visualIcon);
document.querySelector('.visual .summary-text').appendChild(categoryText);
document.querySelector('.visual .summary-num').textContent = data[3].score;*/