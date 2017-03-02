// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//
  // Initial code
//
/*
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
*/

// The array of quotes (source: https://addicted2success.com/quotes/30-famous-quotes-that-will-inspire-success-in-you/)
var quotes = [
  {
    quote     : "You can do anything but not everything",
    author    : "David Allen",
    citation  : "Making it All Work",
    year      : 2009,
  },
  {
    quote     : "If you don’t build your dream, someone else will hire you to help them build theirs.",
    author    : "Dhirubhai Ambani",
    citation  : null,
    year      : null,
  },
  {
    quote     : "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    author    : "Mark Caine",
    citation  : "Awesome book ever write",
    year      : 1998,
  },
  {
    quote     : "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    author    : "Audre Lorde",
    citation  : null,
    year      : 2015,
  },
  {
    quote     : "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    author    : "Mark Twain",
    citation  : "Mark Twain's like book",
    year      : null,
  },
  {
    quote     : "I have not failed. I’ve just found 10,000 ways that won’t work.",
    author    : "Thomas A. Edison",
    citation  : "Edison's biography",
    year      : 1900,
  },
  {
    quote     : "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    author    : "David Brinkley",
    citation  : null,
    year      : null,
  },
  {
    quote     : "No one can make you feel inferior without your consent.",
    author    : "Eleanor Roosevelt",
    citation  : null,
    year      : 1936,
  },
  {
    quote     : "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author    : "Mahatma Gandhi",
    citation  : "Gandhi's book maximum edition",
    year      : 1965,
  },
  {
    quote     : "Success is about creating benefit for all and enjoying the process. If you focus on this & adopt this definition, success is yours.",
    author    : "Kelly Kim",
    citation  : "My book, my story",
    year      : null,
  },
];


// Selecting the variables within the DOM
var quoteBox      = document.getElementById('quote-box');
var quoteItSelf   = quoteBox.getElementsByClassName('quote');
var author        = quoteBox.getElementsByClassName('author');
var citation      = quoteBox.getElementsByClassName('citation');
var year          = quoteBox.getElementsByClassName('year');
var loadQuoteBtn  = document.getElementById('loadQuote');


// Creating the functions needed
function getRandomQuote() {
  var min         = 0;
  var max         = (quotes.length - 1);
  // According to the quotes array length, pick up a random number, round it and store the object within a variable
  var quoteNumber = Math.random() * (max - min) + min;
  quoteNumber     = Math.round(quoteNumber);
  var quoteObject = quotes[quoteNumber];
  // Return the object
  return quoteObject;
}

function printQuote() {
  var quoteObject = getRandomQuote();
  console.log(quoteObject);
}

// Adding the event listeners
loadQuoteBtn.addEventListener("click", printQuote, false);
