const quote = document.querySelector('#quote');
const person = document.querySelector('#person');
const newQuoteBtn = document.querySelector('#newQuoteBtn');

const quotes = [
    {
        "quote": "If you're going through hell, keep going.",
        "person": "Winston Churchill"
    },
    {
        "quote": "A ship is safe in harbor, but that's not what ships are for.",
        "person": "William Shedd"
    },
    {
        "quote": "You can be the ripest, juiciest peach in the world, and there's still going to be somebody who hates peaches.",
        "person": "Dita Von Teese"
    },
    {
        "quote": "Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan 'Press On' has solved and always will solve the problems of the human race.",
        "person": "Calvin Coolidge"
    },
    {
        "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "person": "Aristotle"
    },
    {
        "quote": "I never look back, darling. It distracts from the now.",
        "person": "Edna Mode"
    },
    {
        "quote": "Think of the most attractive person you know. Even that person, at some point in their life, has had raging diarrhea.",
        "person": "Unknown"
    },
    {
        "quote": "Not all those who wander are lost.",
        "person": "Tolkien"
    },
    {
        "quote": "How Can Mirrors Be Real If Our Eyes Aren't Real",
        "person": "Jaden Smith"
    },
    {
        "quote": "is meatball an fruit",
        "person": "Post Malone"
    },
];

let currentQuoteIndex = 0;

newQuoteBtn.addEventListener("click", function () {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    
    quote.textContent = quotes[randomIndex].quote;
    person.textContent = quotes[randomIndex].person;
});