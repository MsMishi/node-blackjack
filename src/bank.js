const readlineSync = require('readline-sync')
class Bank{
  constructor(account=100){
    this.account = account
    this.bet = 0
  }

  betMethod() {
    if ( this.bet === 0 ) {
      var playerBet = readlineSync.question("You have " + this.account + ". Place your bet")
    } else {
      return this.account
    }
    this.bet = playerBet
    this.account -= playerBet
  }

  showBank() {
    console.log(this.account)
    return this.account
  }
}

var banky = new Bank()

console.log( banky )

banky.betMethod()
banky.showBank()

module.exports = Bank
