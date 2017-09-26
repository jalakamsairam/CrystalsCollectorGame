//random number with global scope
//we need a ranodm generator for the computer
$(document).ready(function(){

   // jQuery methods go here...


var randomNumber;


function randomGeneratorForComputer() {
  
  randomNumber = Math.floor(getRandomInt(19,120));

  // console.log(randomNumber); 

  return randomNumber;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function renderScreen(){
  $("#randomnumber").html(randomNumber);
  console.log("inside renderScreen");
  console.log(randomNumber)
}

randomGeneratorForComputer();//onstart
renderScreen();//onstart

});