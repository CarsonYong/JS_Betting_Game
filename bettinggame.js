
$( document ).ready(function() {
  $('#reset').hide();
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
        alert(money); 
        // console.log("Well done!");
        feedback.text("Well done!")
      } else if (parseInt(guess) === number + 1 || parseInt(guess) === number - 1){
        alert(money); 
        funds.text(money)
        feedback.text("Nearly"); 
      } else {
        money -= parseInt(bet);
        if (money <= 0) {
          alert('no money')
          money = 0;
          alert(money);
          $('#btn').hide();
          $('#reset').show().fadeIn(3000);
      } 
        funds.text(money)
        alert(money); 
        feedback.text("Dude you weren't even close!");
      }
      // if (money <= 10) {
      //   alert("You don't have enough money to play") 
      // }

  }
  function resetCode(){
   funds = 10;
 }

 $("#reset").click(resetCode);

});



  // $('#reset').click(bettinggame.reload());