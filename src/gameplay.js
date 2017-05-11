function startGame(){
let userInput = prompt("welcome to black jack!! 😜 press s to start, press e to end game")
 if (userInput === "s" || userInput === "S"){
let bet = prompt("You have $20. Place your bet")
   if(bet > 0){
    // let value =  //card1 + card2
    dealerHand = shuffle()
    // alert(dealerHand)
   } else {
     let bet = prompt('please enter a bet greater than $0')
   }

 } else {
   alert('you have ended the game')
 }
}

startGame()
// function cardValue(){
//   if (shuffle().valueof() != NaN){
//   return(shuffle() + shuffle())
//   }
// }

function dealer(){
  for (hand = 0; dealerHand <= 16;dealerHand + shuffle()) {
    if (dealerHand > 21) {
      console.log("Dealer busts! You win!".green)
    } else {
      console.log
    }
  }
}
