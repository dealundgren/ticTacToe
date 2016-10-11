 $(document).ready(function(){

    var counter = 0;
    var blueArr = [];
    var redArr = [];
    var winnings = [];
    blueWins = 0;
    redWins = 0;
    tieWins = 0;
    for (var i = 0; i < 9; i ++){
      $("#board").append("<div id="+i+" class='lightgrey'><div>")
    }
    $('#message').html('BLUE TURN').css('background-color', 'blue');
    

    $('#continue').on('click', function(){
      counter = 0;
      blueArr = [];
      redArr = [];
      for (var g = 0; g < 9; g++){
        $('#'+g).removeClass('win').removeClass('blue').removeClass('blueWin').removeClass('red').removeClass('redWin').addClass('lightgrey');
      }
      $('#message').html('BLUE TURN').css('background-color', 'blue');
      $('#continue').removeClass('bringUp');
      document.getElementById("board").style.pointerEvents = 'auto';
    })

    $(".lightgrey").on('click', function(e){
      e.preventDefault();
      // $('#message').html('')
      if ($(this).hasClass('lightgrey')){
        if (counter % 2 === 0){
          $(this).addClass('blue').removeClass('lightgrey').removeClass('places');
          blueArr.push(+this.id);
          counter++;
          if (checker(blueArr)){
            for (var t = 0; t < 3; t ++){
              $('#'+winnings[t]+'').removeClass('blue').addClass('blueWin');
            }
            $('#message').html('BLUE WINS!');
            blueWins++;
            $('#blueScore').html(blueWins);
            document.getElementById("board").style.pointerEvents = 'none';
            $('#continue').addClass('bringUp');
          } else if(counter > 8) {
            tieWins++;
            $('#message').html('Tie.').css('background-color', "black");
            $('#tieScore').html(tieWins);
            $('#continue').addClass('bringUp');
          } else{
            $('#message').html('RED TURN').css('background-color', "red");
          }
        } else {
          $(this).addClass('red').removeClass('lightgrey').removeClass('places');
          redArr.push(+this.id);
          counter++;
          if (checker(redArr)){
            for (var t = 0; t < 3; t ++){
              $('#'+winnings[t]+'').removeClass('red').addClass('redWin');
            }
            $('#message').html('RED WINS!');
            redWins++;
            $('#redScore').html(redWins);
            document.getElementById("board").style.pointerEvents = 'none';
            $('#continue').addClass('bringUp');
          } else if(counter > 8){
            tieWins++;
            $('#message').html('Tie.').css('background-color', "black");
            $('#continue').addClass('bringUp');
            $('#tieScore').html(tieWins);
          }  else {
            $('#message').html('BLUE TURN').css('background-color', "blue");
          }
        }
      } else {
        $('#message').html('Already taken')
      }
    })



  function checker(array){
    if (array.length < 3){
      return false;
    };
   var wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
    for (var i = 0; i < wins.length; i++){
      var count = 0;
      for (var k = 0; k < wins[i].length; k++){
        if (array.indexOf(wins[i][k]) > -1){
          count++;
        }
        if (count >= 3){
          winnings = wins[i];
          return true;
        }
      }
    }
    return false;
  }
})