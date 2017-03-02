// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

//
  // Initial code
//
/*
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
*/


// Selecting the variables within the DOM
var quoteBox      = document.getElementById('quote-box');
var quoteItSelf   = quoteBox.getElementsByClassName('quote');
var author        = quoteBox.getElementsByClassName('author');
var citation      = quoteBox.getElementsByClassName('citation');
var year          = quoteBox.getElementsByClassName('year');
var loadQuoteBtn  = document.getElementById('loadQuote');


// Adding the event listeners
loadQuoteBtn.onclick = function() {
  console.log(quoteBox);
  console.log(quoteItSelf);
  console.log(author);
  console.log(citation);
  console.log(year);
  console.log(loadQuoteBtn);
};
