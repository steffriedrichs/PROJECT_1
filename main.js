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
    $("#gameBoard").append('<div class="field '+numFields+' fieldSize'+myGame.n+'x'+myGame.n+'"></div>');
  }

  //display marked fields in different color:
  var markedFields = '' + myGame.board;  
  markedFields = markedFields.split(','); //removes ',' between numbers!
  for(var f = 0; f < markedFields.length; f++){
    if(markedFields[f] == 1){
        //change color of corresponding div - toggle marked class
        $(".field."+f).toggleClass("marked"); // selector: ".oneclass.otherclass"
    }
  }
});


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