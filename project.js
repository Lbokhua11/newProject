//We need to store useful tips in some data it should be const array
const quoteArray = ["To be a good lucid dreamer you need a dream journal", "Doing reality checks is so crucial in lucid dreaming", 
"meditation help your mind to focus", "good sleep is essential for lucid dreaming", "Read books about lucid dreaming"];
let randomGenerator = Math.floor(Math.random() * 5);

// It's time to log random quote


console.log("Your lucid dream tip: "+ quoteArray[randomGenerator]);
