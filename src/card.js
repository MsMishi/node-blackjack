module.exports = Card
class Card {
  constructor(rank, suit) {
  this.rank = rank,
  this.suit = suit,
  this.value = null;
  }

  cardValue(rank) {
    if (isNaN(this.rank)){
      this.value = 10
    } else {
      this.rank === this.value
    }
  }
 return new Card().toString()
}
