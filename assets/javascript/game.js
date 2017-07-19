//$(document).ready(function() {
//variables
var gem1 = gemRandomInt();
var gem2 = gemRandomInt();
var gem3 = gemRandomInt();
var gem4 = gemRandomInt();
var userPoints = 0;
generatedNumbers = []
var Wins=0;
var Losses=0;
//functions
//function reset (){
var computerChoice = Math.floor(Math.random()*101+19);
function gemRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(12);
  return Math.floor(Math.random() * (max- min + 1)) + min;
}

console.log(computerChoice);
console.log(gemRandomInt());

$('.crystalBoxes').html(gemRandomInt);
$('.target').html()
/*$('.target').html(computerChoice);
$('box').on('click',function() {

var send =   $(this).attr('value',computerChoice);
  var check =$(this).attr('value');*/
/*
function sweet() {
  alert ("Winner weiner!");
  wins++;
  $('#total-wins').text(wins);
  //reset();
}*/

//score tally





//jquery

//});
//});
