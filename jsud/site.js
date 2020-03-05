function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var x = 0 ;

function typeWrite(span){
  $('#'+span).addClass('cursor')
  var text = $('#'+span).text();
  var randInt = 0
  for (var i = 0; i < text.length; i++) {
    randInt += parseInt(randomIntFromInterval(40,300));
    var typing = setTimeout(function(y){
      $('#'+span).append(text.charAt(y));
    },randInt, i);
  };
  setTimeout(function(){
    $('#'+span).removeClass('cursor');
  },randInt+2500);
}


$(document).ready(function(){
  typeWrite('test');
});

var humanize = Math.round((Math.random() * 100) + 20);
var typedText = $('span.try');


function backspace() {
  var word = typedText.html();
  var wordLength = word.length;
  var newWordLength = wordLength - 1;
  var newWord = word.slice(0, newWordLength);
  typedText.html(newWord);
  if (newWordLength === 0) {
    clearTimeout(intrvl);
  } else {
    newWordLength = wordLength;
  }
}

setTimeout(function(){
  var intrvl = setInterval(backspace, humanize); 
}, 4500)

