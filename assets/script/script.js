// Initialize popover for instructions
$(function () {
  $('[data-toggle="popover"]').popover()
})

// VARIABLES
let targetNo; //number genarated for player to reach
let showTargetNo; // display target number on document

let purpleNo; // number generated for purple crystal
let orangeNo; // number generated for orange crystal
let pinkNo; // number generated for pink crystal
let blueNo; // number generated for blue crystal

let purpleCrystal; //purple crystal
let orangeCrystal; //orange crystal
let pinkCrystal; //pink crystal
let blueCrystal; //blue crystal

let mySum; //tally of player's current sum 

let wins= 0; //Player wins
let losses= 0; //Player losses

let winModal // modal pop-up to celebrate win
let lossModal // modal pop-up to inform loss

// FUNCTIONS
generateNumbers // generates random number to match and random numbers for each crystal
addPurpleNo // adds random number associate with purple crystal to players sum
addOrangeNo // adds random number associate with orange crystal to players sum
addPinkNo // adds random number associate with pink crystal to players sum
addBlueNo // adds random number associate with blue crystal to players sum
showMySum // dispalys updated sum
winNotification // Shows modal and triggers reset 


// Initialize game set an onclick

// Generate and assign numbers - target number and crystals
function generateNumbers () {
    targetNo = Math.floor(Math.random() * 99);
    showTargetNo = document.getElementById("targetNo").innerHTML ="";
    // possibly something like this for jQ    $('#scoreToMatch').text(Random);

    purpleNo = Math.floor(Math.random() * 16);
    //code here to push blue number to crystal to be accessed at click

    orangeNo = Math.floor(Math.random() * 16);
//code here to push blue number to crystal to be accessed at click

    pinkNo = Math.floor(Math.random() * 16);
//code here to push blue number to crystal to be accessed at click

    blueNo = Math.floor(Math.random() * 16);
//code here to push blue number to crystal to be accessed at click

}


// Display wins
$('#winModal').on('shown.bs.modal', function winNotification() {        
    $('#myInput').trigger('focus')
      })
      //wins++; // does this add to the win count?
      //$('#wins').text(wins);
      

// Display losses
$('#lossModal').on('shown.bs.modal', function lossNotification () {
    $('#myInput').trigger('focus')
      })
    //   losses++;
    //   $('#losses').text(losses);

//Clicking crystals and adding player's score

document.getElementById("purpleCrystal").addEventListener("click", addPurpleNo);

function addPurpleNo () {
    mySum = mySum + purpleNo;
    console.log ("Player's current sum" + mySum);
    showMySum = document.getElementById("mySum").innerHTML = "";
    //is this how it looks in jQ? $('#mysum').text(mySum);
        // Win/ loss conditions
        if (mySum === targetNo){
            winNotification ();
        }
        else if (mySum > targetNo){
            lossNotification ();
        }
}


// Win and loss modals

// function updateWinLoss () {
//     updateWins = document.getElementById("targetNo");
// $('#wins').text(wins);
// $('#losses').text(losses);

// There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.

// You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.
// if statements here

// Reset game