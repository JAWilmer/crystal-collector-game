// VARIABLES
let targetNo //number genarated for player to reach
let purpleNo // number generated for purple crystal
let orangeNo // number generated for orange crystal
let pinkNo // number generated for pink crystal
let blueNo // number generated for blue crystal

let purpleCrystal //purple crystal 
let orangeCrystal //orange crystal 
let pinkCrystal //pink crystal 
let blueCrystal //blue crystal 


let mySum= 0; //tally of player's current sum 
let wins= 0; //Player wins 
let losses= 0; //Player losses 

$(document).ready(function() {

  // Generate a random number between 19 - 120 
  let targetNo=Math.floor(Math.random()*101+19)
    // Apends number to targetNo id
    $('#targetNo').text("Number to match:   " +
      targetNo);
    //Generate a random number between 1 - 12 for each gem
    let purpleNo= Math.floor(Math.random()*11+1)
    let orangeNo= Math.floor(Math.random()*11+1)
    let pinkNo= Math.floor(Math.random()*11+1)
    let blueNo= Math.floor(Math.random()*11+1)  
      $('#winCount').text("Wins:   " + wins);
      $('#lossCount').text("Losses:   " + losses); 

  //Resets the game
  function reset(){
    targetNo=Math.floor(Math.random()*101+19);
    console.log(targetNo)
    $('#targetNo').text("Number to match:   " +
    targetNo);
    purpleNo= Math.floor(Math.random()*11+1);
    orangeNo= Math.floor(Math.random()*11+1);
    pinkNo= Math.floor(Math.random()*11+1);
    blueNo= Math.floor(Math.random()*11+1);
    mySum= 0;
    $('#mySum').text("My current sum:  "  + mySum);
    }

  //Congratulates winner and adds wins to the mySum
  function congratulations(){  
  alert("Congratulatons, you won!");
    wins++; 
    $('#winCount').text("Wins:   " + wins);
    reset();
  }
  //Consoles loser and addes losses to mySum
  function tryAgain(){ 
  alert ("You almost did it! Try again?");
    losses++;
    $('#lossCount').text("Losses:  " + losses);
    reset()
  }
  //Sets up click for jewels
    $('#purpleCrystal').on ('click', function(){  
      mySum = mySum + purpleNo;
      console.log("My new sum = " + mySum);
      $('#mySum').text("My current sum:   "  + mySum); 
            //sets win/lose conditions
          if (mySum == targetNo){
            congratulations();
          }
          else if ( mySum > targetNo){
            tryAgain();
          }   
    })  
    $('#orangeCrystal').on ('click', function(){ 
      mySum = mySum + orangeNo;
      console.log("My new sum = " + mySum);
      $('#mySum').text("My current sum:  " + mySum); 
          if (mySum == targetNo){
            congratulations();
          }
          else if ( mySum > targetNo){
            tryAgain();
          } 
    })  
    $('#pinkCrystal').on ('click', function(){ 
      mySum = mySum + pinkNo;
      console.log("My new sum = " + mySum);
      $('#mySum').text("My current sum:  " + mySum);
          //Sets win/lose conditions
          if (mySum == targetNo){
            congratulations();
          }
          else if ( mySum > targetNo){
            tryAgain();
          } 
    })  
    $('#blueCrystal').on ('click', function(){ 
      mySum = mySum + blueNo;
      console.log("My new sum =  " + mySum);
      $('#mySum').text("My current sum:  " + mySum); 
          //Sets win/lose conditions
          if (mySum == targetNo){
            congratulations();
          }
          else if ( mySum > targetNo){
            tryAgain();
          }
    });   
  }); 












