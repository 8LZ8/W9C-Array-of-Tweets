// Making an Array with 10 of my favorite Socrates quotes
var tweets = [
    `One thing only I know, and that is that I know nothing.`,
    `Happiness is unrepentant pleasure.`,
    `Be as you wish to seem.`,
    `Know thyself.`,
    `The highest realms of thought are impossible to reach without first attaining an understanding of compassion.`,
    `The nearest way to glory is to strive to be what you wish to be thought to be.`,
    `The secret of change is to focus all your energy, not in fighting the old, but on building the new.`,
    `Falling down is not a failure. Failure comes when you stay where you have fallen.`,
    `The greatest blessing granted to mankind come by way of madness which is a divine gift.`,
    `Wisdom begins in wonder.`,
];

// Looping 10 times
for (var counter = 0; counter < 10; counter++) {
    //Printing the last tweet and pop (removes it)
    console.log(tweets.pop());
}
