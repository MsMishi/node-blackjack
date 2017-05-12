class Card {
  constructor(rank, suit) {

    this.rank = rank
    this.suit = suit
    this.value = null;

  }

  cardValue(rank) {
    if (this.rank === 'A') {
      this.value = 11
    } else if (isNaN(this.rank)) {
      this.value = 10
    } else {
      this.rank === this.value
    }
  }

  toString() {
    return `${this.suit}${this.rank}`
  }
}


module.exports = Card
