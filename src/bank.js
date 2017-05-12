

class Bank{
  constructor(account, bet){
this.account = this.account - this.bet || 100,
this.bet = bet,

  if (bet <= 0){
    prompt("You have " + this.account + ". Place your bet")
  } else {
    return this.account
    }
  }
}
console.log(new Bank())

module.exports = Bank
