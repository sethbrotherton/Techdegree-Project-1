// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
var printEvent = document.getElementById('loadQuote').addEventListener("click", printQuote, false);
// when user clicks anywhere on the button, the "randomColor" function is called
var colorEvent = document.getElementById('loadQuote').addEventListener("click", randomColor, false);


// the quotes and their origins and other properties
var quotes = [
  {quote: "Milk is for babies.", source: "Arnold Schwarzenegger", citation: "Pumping Iron", year: "1977", tags: ["fitness", " humor"]},
  {quote: "Beer is proof that God loves us and wants us to be happy.", source: "Benjamin Franklin", tags: ["beer", " history", "misattributed quotes"]},
  {quote: "A small mistake in the beginning is a big one in the end.", source: "Aristotle", citation: "On the Heavens and the Earth", year: "ca. 350 B.C.", tags: ["philosophy", "life lessons", "real talk"]},
  {quote: "To seek the highest good is to live well.", source: "St. Augustine of Hippo", citation: "The Catholic Way of Life and the Manichean Way of Life", year: "A.D. 387", tags: ["morality", "philosophy"]},
  {quote: "What will it profit a man if he gains the whole world, but loses his soul?", source: "Jesus Christ", citation: "Matthew 16:26", year: "ca. A.D. 30", tags: ["religion", " morality"]},
  {quote: "The only thing I know is that I know nothing.", source: "Socrates", tags: ["philosophy ", " virtue"]},
  {quote: "Wise men speak because they have something to say; Fools because they have to say something.", source: "Plato", tags: ["misattributed quotes"]},
  {quote: "A dead thing can go with the stream, but only a living thing can go against it.", source: "G.K. Chesterton", citation: "The Everlasting Man", year: 1925},
  {quote: "Jerry, just remember, it's not a lie if you believe it.", source: "George Costanza", citation: "Seinfeld", year: 1995, tags: ["comedy", " funny"]}
]

// generates a random quote from the quotes array
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// Sets timer to 0, in global scope
var timer = 0;
// Counts up to 20, which when reached activates printQuote and randomColor functions
function addOne() {
  timer += 1;
  if (timer == 20) {
    printQuote();
    randomColor();
    timer = 0;
  }
}
var counting = setInterval(addOne, 1000);



// prints the random quote generated to the document
function printQuote() {
    var randomQuote = getRandomQuote();
    var html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
      <span class="citation">${randomQuote.citation}</span>
      <span class="year">${randomQuote.year}</span>
    </p>
    `;
    // adds each tag as an individual anchor element
    if (randomQuote.tags !== undefined) {
      for (var i = 0; i < randomQuote.tags.length; i++) {
        html += '<a class="tagLinks" href="#">' + randomQuote.tags[i] + '</a>';
      }
    }
    document.getElementById('quote-box').innerHTML = html;
  // // if any of these following properties are lacking, "undefined" will not be displayed
    if (randomQuote.citation === undefined) {
      document.querySelector(".citation").style.display = 'none';
    }
    if (randomQuote.year === undefined) {
      document.querySelector(".year").style.display = 'none';
    }
    if (randomQuote.source === undefined) {
      document.querySelector(".source").style.display = 'none';
    }
    // timer reset to 0, so that the function isn't called again for another 20 seconds, or if button clicked
    timer = 0;
  }


// generates a random rgb background-color and displays on document body
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var theColor = `rgb(${r}, ${g}, ${b})`;
  document.querySelector('body').style.backgroundColor = theColor;
}
