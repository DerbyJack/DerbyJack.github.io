$(document).ready(function(){
  
    var quotes = ["The Best Preparation For Tomorrow Is Doing Your Best Today.", "I Can't Change The Direction Of The wind, but I can adjust my sails to always reach my destination.", "Believe you can and you're halfway there.", "It always seems impossible until its done.", "Start where you are. Use what you have. Do what you can.", "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.", "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.", "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.", "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.", "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.", "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.", "We Generate Fears While We Sit. We Overcome Them By Action.", "To See What Is Right And Not Do It Is A Lack Of Courage.", "The Future Belongs To The Competent. Get Good, Get Better, Be The Best!", "The way to get started is to quit talking and begin doing."];
    var authors = ["H. Jackson Brown, Jr.", "Jimmy Dean", "Theodore Roosevelt", "Nelson Mandela", "Arthur Ashe", "Confucius", "Unknown", "Vince Lombardi", "Rob Siltanen", "Og Mandino", "Johann Wolfgang von Goethe", "Henry Link", "Confucious", "Brian Tracy", "Walt Disney"];
    var randomNumber;
    var randomQuote;
    var randomAuthor;
  getQuote();
   function getQuote(){ 
     
    randomNumber = Math.floor((Math.random()*quotes.length));
     
    randomQuote = quotes[randomNumber];
    randomAuthor = authors[randomNumber];
   
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }
  
  $("#twitter").on("click", function(){   window.open("https://twitter.com/intent/tweet?text=" + '"' + randomQuote + '"' + "  -  " + randomAuthor + "#quotes");
  })
  
  $(".inspire").on("click", function(){
    getQuote();
  })
})