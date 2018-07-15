// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var quotes = [
  {quote: "Milk is for babies.", source: "Arnold Schwarzenegger", citation: "Pumping Iron", year: "1977"},
  {quote: "Beer is proof that God loves us and wants us to be happy.", source: "Benjamin Franklin"},
  {quote: "A small mistake in the beginning is a big one in the end.", source: "Aristotle", citation: "On the Heavens and the Earth", year: "ca. 350 B.C."},
  {quote: "To seek the highest good is to live well.", source: "St. Augustine of Hippo", citation: "The Catholic Way of Life and the Manichean Way of Life", year: "A.D. 387"},
  {quote: "What will it profit a man if he gains the whole world, but loses his soul?", source: "Jesus Christ", citation: "Matthew 16:26", year: "ca. A.D. 30"}
]

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

function printQuote() {
  var randomQuote = getRandomQuote();
  var html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
    <span class="citation">${randomQuote.citation}</span>
    <span class="year">${randomQuote.year}</span>
  </p>`;
  document.getElementById('quote-box').innerHTML = html;

  if (randomQuote.citation === undefined) {
    document.querySelector(".citation").style.display = 'none';
  }
  if (randomQuote.year === undefined) {
    document.querySelector(".year").style.display = 'none';
  }
  if (randomQuote.source === undefined) {
    document.querySelector(".source").style.display = 'none';
  }
}
