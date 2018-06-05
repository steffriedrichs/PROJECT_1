// create new game:
var myGame = new Game(); 

$(document).ready(function(){

//get Board Size from user's choice:
$( "input" ).click(function() {
  myGame.n = Number($("input[name='Size']:checked").attr("id"));
  myGame.board = myGame.randomMatrix(myGame.n);
  myGame.stones = myGame.randomMatrix(myGame.n);
  //display Board in correct size:
  //create correct number (n * n) of DOM elements 
  $("#gameBoard").empty();
  for(var numFields = 0; numFields < myGame.n * myGame.n; numFields++ ){
    $("#gameBoard").append('<div class="field fieldSize' + myGame.n + 'x' + myGame.n +'"></div>');
  }
});
// display marked fields in different color


// $("rowSelector").click(function() {
//   $( this ).toggleClass("inactive");
// });


// $( "rowSelector" ).click(function() {
//    $( this ).toggleClass("inactive");
// });

//maybe select row/col like in hearts example:
// $('.heart').click(function(){
//   $(this).addClass('on');
//   $(this).prevAll().addClass('on');
// });

// Add all the div's to the HTML
  //document.getElementById('memory_board').innerHTML = html;


});  // end of document ready