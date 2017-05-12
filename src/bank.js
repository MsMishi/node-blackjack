const readlineSync = require('readline-sync')
class Bank {
  constructor(account = 100) {
    this.account = account
    this.bet = 0
  }

  betMethod() {
    if (this.bet === 0) {
      var playerBet = readlineSync.question("You have $" + this.account + ". Place your bet: ")
    } else {
      return this.account
    }
    this.bet = playerBet
    this.account -= playerBet
  }

  showBank() {
    // console.log(this.account)
    console.log("You bet $" + this.bet + '. You have $' + this.account + " remaining")
  }
}

let playerBank = new Bank()

console.log(playerBank)

playerBank.betMethod()
playerBank.showBank()

module.exports = Bank
