//random number with global scope
//we need a ranodm generator for the computer
$(document).ready(function(){

   // jQuery methods go here...


var randomNumber;
var score;
var wins = 0;
var losses = 0;
var userScore = 0 ;

var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var flag = true;



function randomGeneratorForComputer() {
  
  randomNumber = Math.floor(getRandomInt(19,120));

  // console.log(randomNumber); 

  return randomNumber;
}

function randomNumberGeneratorForButtons() {
  let arr=[];
  num1 =(Math.ceil(Math.random()*12));
  console.log(num1);
  num2 =(Math.ceil(Math.random()*12));
  num3 =(Math.ceil(Math.random()*12));
  num4 =(Math.ceil(Math.random()*12)); 
 //  console.log(jQuery.type(num1));
 // console.log(num1,num2,num3,num4);
 arr.push(num1);
 arr.push(num2);
 arr.push(num3);
 arr.push(num4);
 return arr;
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function youWin(){

  wins++;

  $("#message").text("you win!");
  $("#wins").text(wins);
}

function youLoose(){
  losses++;

  $("#message").text("you loose!");
  $("#losses").text(losses);
}

function renderScreenAndValues(){
  let x = randomNumberGeneratorForButtons();
  console.log("TEST: "+x);
    $("#randomnumber").html(randomNumber);
  //console.log("inside renderScreen");
    $("#userScore").text(userScore);

    $("#wins").text(wins);

    $("#losses").text(losses);

    $("#button1").attr('value',x[0]);

    $("#button2").attr("value",x[1]);

    $("#button3").attr("value",x[2]);

    $("#button4").attr("value",x[3]);
  //console.log(randomNumber)
}

function start(){
  randomGeneratorForComputer();//onstart
renderScreenAndValues();//onstart
}

$("button").on("click",function(){
    if(flag){
      userScore += parseInt($(this).val());
      $("#userScore").text(userScore);
      // if(userScore == randomNumber)
     
   if(userScore === randomNumber){
    youWin();
    flag = false;
    }
   if(userScore > randomNumber){
    youLoose();
    flag = false;
  }
  if(!flag){
    console.log("HELL");
    userScore = 0 ;
    flag = true;

    start();
    
  }
}
});

start();

});
