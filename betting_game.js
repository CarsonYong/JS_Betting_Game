function bettinggame() {
  var money = 10
  var number = 11;
  while (money > 0 ){
    var guess = prompt("Guess a number?");
    var bet = prompt("How much do you want to bet between $5 - $10")
    if (parseInt(guess) === number) {
      console.log(money + parseInt(bet)); 
      console.log("Well done!");
    } else if (parseInt(guess) === number + 1 || parseInt(guess) === number - 1){
    console.log(money); 
    console.log("Nearly"); 
  } else {
    money -= parseInt(bet); 
    console.log(money);
    console.log("Dude you weren't even close!");
  }
}
}