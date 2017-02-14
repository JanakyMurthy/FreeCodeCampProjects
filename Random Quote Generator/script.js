// get a quote on screen load
window.onload = getquote();

// function that returns a random color
function getRandomColor()
{
  var letters = "0123456789ABCDEF";
  color = "#";
  for(i =0; i<6; i++)
  {
     color += letters[Math.floor(Math.random()*16)];   
  }
  return color;
}

// Returns a random Quote
function getquote()
{
  
  var msg = document.getElementById("quote-message");
  
  var author = document.getElementById("quote-author");
  
  var link = document.getElementById("twitter-link");
 
  
  // list of quotes
  var quoteList = [
    {
      "author": "Albert Ellis",
      "content": "The  best  years  of  your  life  are  the  ones in  which  you  decide  your  problems  are your own. You don't blame them on your mother,  the  ecology,  or  the  President. You  realize  that  you  control  your  own destiny. "
    },
    {
      "author": "Deepak Chopra",
      "content":"Everyone is here because he or she has a place to fill and every piece must fit itself into the big jigsaw puzzle."
    },
    {
    "author": "D Chopra",
      "content":"Everyone is here because he or she has a place to fill and every piece must fit itself into the big jigsaw puzzle."
    },
    {
      "author":"Charles.R.Swindoll",
      "content":"Life is 10% what happens to you and 90% how you react to it."
     },
    {
      "author": "Dr. Seuss",
      "content": "Don't cry because it's over, smile because it happened.” "
    },
    {
      "author":"Albert Einstein",
      "content": "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {
      "author": "Mae West",
      "content": "You only live once, but if you do it right, once is enough."
    },
    {
      "author":"Mark Twain",
      "content": "If you tell the truth, you don't have to remember anything."
    },
    {
      "author": "Oscar Wilde",
      "content": "I am so clever that sometimes I don't understand a single word of what I am saying."
    },
    {
      "author": "Will Rogers",
      "content": "The quickest way to double your money is to fold it over and put it back in your pocket."
    }
    
  ];
  
  // get a random quote
  var numOfQuotes = quoteList.length;
  var quoteNum = Math.floor(Math.random() * numOfQuotes);
  
  var quote = quoteList[quoteNum].content;
  var quoter =  quoteList[quoteNum].author;
  
  // set the quote and its author
  msg.innerHTML = quote;
  
  author.innerHTML = "- " + quoter;
  
  // set the twitter link
  link.href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + quote + "-by " + quoter;
  
  // get random color
  var color1 = getRandomColor();
  var color2 = getRandomColor();
  
  // set background
  var quoteBox = document.getElementById("quote-box");
  quoteBox.style.backgroundColor = color1;
  
  var container = document.getElementById("cont");
  container.style.backgroundColor = color2;
}
