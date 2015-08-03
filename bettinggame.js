
$( document ).ready(function() {
 
  $('#btn').click(bettinggame);

    // Your code here.
        var money = 10
    var number = 11;
  function bettinggame() {

    // while (money > 0 ){
      // var guess = prompt("Guess a number?");
      var guess = $("#guess").val()
      var bet = $("#bet").val()
      var feedback = $("#feedback")
      var funds = $("#funds")
      // var bet = prompt("How much do you want to bet between $5 - $10")
      if (parseInt(guess) === number) {
        money+= parseInt(bet);
        // console.log(money + parseInt(bet));
        funds.text(money); 
        // console.log("Well done!");
        feedback.text("Well done!")
      } else if (parseInt(guess) === number + 1 || parseInt(guess) === number - 1){
        funds.text(money); 
        feedback.text("Nearly"); 
      } else {
        money -= parseInt(bet); 
        funds.text(money); 
        feedback.text("Dude you weren't even close!");
      }
      if (money < 10) {
        funds.text("You don't have enough money to play")
      }
    // }
  }
});
