// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called


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
var $loadQuoteBtn  = document.getElementById('loadQuote');


// Creating the functions needed
function changeBackgroundColor() {
  // Create a random number & convert it into an hex value
  var newColor = Math.random();
  if (newColor < 0.1) {
    newColor = newColor + 0.1;
  }
  newColor = newColor * 1000000;
  newColor = Math.round(newColor);
  newColor = "#" + newColor;
  return newColor;
}



  // This function returns a random quote
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

  // This function recovers the random quote and print it.
function printQuote() {
  // Change the background-color
  var newbgColor    = changeBackgroundColor();
  console.log(newbgColor);
  document.body.style.backgroundColor = newbgColor;

  // Take this object and assign the variables needed
  var quoteObject   = getRandomQuote();
  var quote         = quoteObject.quote;
  var author        = quoteObject.author;
  var citation      = quoteObject.citation;
  var year          = quoteObject.year;

  // Target the dom elements & update their content
  document.querySelector('.quote').textContent = quote;
  document.querySelector('.author').textContent = author;
    // if citation or year are not null, fill them in.
  if (citation === null) {
    document.querySelector('.citation').textContent = "";
  } else {
    document.querySelector('.citation').textContent = citation;
  }
  if (year === null) {
    document.querySelector('.year').textContent = "";
  } else {
    document.querySelector('.year').textContent = year;
  }
}

// Adding the event listeners
$loadQuoteBtn.addEventListener("click", printQuote, false);
