//math random floor shuffle
//
// Shuffle() {
//   shuffles deck
// }

let cardDeck = [
'A of ♣','A of ♦','A of ♥','A of ♠',
'2 of ♣', '2 of ♦','2 of ♥','2 of ♠',
'3 of ♣','3 of ♦','3 of ♥','3 of ♠',
'4 of ♣','4 of ♦','4 of ♥','4 of ♠',
'5 of ♣','5 of ♦','5 of ♥','5 of ♠',
'6 of ♣','6 of ♦','6 of ♥','6 of ♠',
'7 of ♣','7 of ♦','7 of ♥','7 of ♠',
'8 of ♣','8 of ♦','8 of ♥','8 of ♠',
'9 of ♣','9 of ♦','9 of ♥','9 of ♠',
'10 of ♣','10 of ♦','10 of ♥','10 of ♠',
'J of ♣','J of ♦','J of ♥','J of ♠',
'Q of ♣','Q of ♦','Q of ♥','Q of ♠',
'K of ♣','K of ♦','K of ♥','K of ♠']

function shuffle(){
  let cardShuffle = cardDeck[Math.floor(Math.random()*cardDeck.length)]
  console.log(cardShuffle)
}

shuffle()
