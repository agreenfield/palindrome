module.exports = Phrase;

// Reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;
  
  this.processor = function processor (string) {
    return string.toLowerCase();
  }

  // returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }
  
  // returns just the letters in the content
  // For exaample:
  //  new Phrase("Hello, World!").letters() === "HelloWorld"
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }
  
  // Returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() ===  reverse(this.processedContent());
  }
}

// Define a translated phase object

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
  
  // Returns translation processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
