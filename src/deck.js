const _ = require('lodash')
const col = require('colors')
const card = require('/.card.js')

module.exports = Deck
class Deck {
  constructor () {
    this.cardDeck = []
  }

 createDeck (){
  const heart = ('♥'.red).bgWhite
  const spade = ('♠'.black).bgWhite
  const diamond = ('♦'.red).bgWhite
  const club = ('♣'.black).bgWhite

  const suits = [heart, spade, diamond, club]
  const ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J','Q','K']


suits.forEach(function(suit){
  ranks.forEach(function(rank){
     this.cardDeck.push(new Card(suit, rank))
    })
  })
}



// shuffle(){
//   this.cardDeck = _.shuffle(cardDeck)
// }
