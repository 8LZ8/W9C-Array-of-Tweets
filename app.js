// Referred back to in-class exercise and used the examples given for this assignment.
// Making an Array of 10 Javacript Objects. 
var tweets = [
    {
        tweet: `One thing only I know, and that is that I know nothing.`,
        username: `Socrates`, 
        created_at: `03-20-2021`,
        age: 15
    },
    {
        tweet: `Happiness is unrepentant pleasure.`,
        username: `Socrates`, 
        created_at: `03-20-2021`,
        age: 15
    },
    {
        tweet: `Falling down is not a failure. Failure comes when you stay where you have fallen.`,
        username: `Socrates`, 
        created_at: `03-20-2021`,
        age: 15
    },
    {
        tweet: `Peace can only come as a natural consequence of universal enlightenment.`,
        username: `Nikola Tesla`, 
        created_at: `03-22-2021`,
        age: 86
    },
    {
        tweet: `The highest realms of thought are impossible to reach without first attaining an understanding of compassion.`,
        username: `Socrates`, 
        created_at: `03-20-2021`,
        age: 15
    },
    {
        tweet: `The secret of change is to focus all your energy, not in fighting the old, but on building the new.`,
        username: `Socrates`, 
        created_at: `03-20-2021`,
        age: 15
    },
    {
        tweet: `The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.`,
        username: `Nikola Tesla`, 
        created_at: `03-22-2021`,
        age: 86
    },
    {
        tweet: `Wisdom begins in wonder.`,
        username: `Socrates`, 
        created_at: `03-20-2021`,
        age: 15
    },
    {
        tweet: `Of all things, I liked books best.`,
        username: `Nikola Tesla`, 
        created_at: `03-22-2021`,
        age: 86
    },
    {
        tweet: `My brain is only a receiver, in the Universe there is a core from which we obtain knowledge, strength and inspiration. I have not penetrated into the secrets of this core, but I know that it exists.`,
        username: `Nikola Tesla`, 
        created_at: `03-22-2021`,
        age: 86
    },  
];

// Made a function;checks for age 18 and older returns true, if otherwise false
function checkAge(tweetPost) {
    if (tweetPost.age >= 18) {
        return true;
    } else if (tweetPost.age < 18) {
        return false;
    }  
}
// Filter the age for tweets that are made by users 18 and over
var checkOver18 = tweets.filter(checkAge);
console.log(checkOver18);


