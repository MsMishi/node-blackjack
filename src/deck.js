class Deck {
  constructor() {
    this.cardDeck = []
  }
}

function createDeck() {
  const heart = ('♥'.red).bgWhite
  const spade = ('♠'.black).bgWhite
  const diamond = ('♦'.red).bgWhite
  const club = ('♣'.black).bgWhite

  const suits = [heart, spade, diamond, club]
  const ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']


  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      cardDeck.push(new Card(suit, rank))
    })
  })
}

module.exports = Deck
