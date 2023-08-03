const questions = [
    {
        question: 'Which is the largest animal in the world?',
        choices: ['Shark', 'Blue Whale', 'Elephant', 'Giraffe'],
        answer: 'Blue Whale'
    },
    {
        question: 'Which is the smallest country in the world?',
        choices: ['Vatican City', 'Bhutan', 'Nepal', 'Sri Lanka'],
        answer: 'Vatican City'
    },
    {
        question: 'Which is the largest desert in the world?',
        choices: ['Kalahari', 'Gobi', 'Sahara', 'Antarctica'],
        answer: 'Antarctica'
    },
    {
        question: 'Which is the smallest continent in the world?',
        choices: ['Asia', 'Australia', 'Arctic', 'Africa'],
        answer: 'Australia'
    }
];

function displayQuestion(index) {
    document.getElementById('question').innerHTML = questions[index].question;
    let answersList = document.getElementById('choices');
    for (let i = 0; i < questions[index].choices.length; i++) {
        let answerChoice = document.createElement('li');
        answerChoice.classList.add('answer');
        answerChoice.innerHTML = questions[index].choices[i];
        answersList.appendChild(answerChoice);
    }
};

// The index of the current question in questions list
let currentQuestionIndex = 0;
// Display the first question
displayQuestion(currentQuestionIndex);