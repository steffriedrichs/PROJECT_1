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
  var countRow = 0;
  var countCol = 0;
  for(var numFields = 0; numFields < myGame.n * myGame.n; numFields++ ){
    $("#gameBoard").append('<div class="field field'+numFields+' fieldSize'+myGame.n+'x'+myGame.n+'"></div>');
    $("#gameBoard").append('<div class="stone stone'+numFields+'"></div>');
    $(".stone.stone"+numFields).css({
      height:((100/myGame.n)/2)*3, 
      width: ((100/myGame.n)/2)*3,  //size is ok.
      top:((100/myGame.n)/4 + 100/myGame.n*countRow)*3,
      left: ((100/myGame.n)/4 + 100/myGame.n*countCol)*3 
    }); 
    countCol++;
    if(countCol%myGame.n == 0){
      countRow++;
      countCol = 0;
    }
  }
  
  //display marked fields in different color:
  var markedFields = '' + myGame.board;  
  markedFields = markedFields.split(','); //removes ',' between numbers!
  for(var f = 0; f < markedFields.length; f++){
    if(markedFields[f] == 1){
        //change color of corresponding div - toggle marked class
        $(".field.field"+f).toggleClass("marked"); // selector: ".oneclass.otherclass"
    }
  }

  //add stones to board - stones can be added to existing field divs as children
  var existingStones = '' + myGame.stones;  
  existingStones = existingStones.split(','); 
  for(var s = 0; s < existingStones.length; s++){
    if(existingStones[s] == 0){
       $(".stone.stone"+s).toggleClass("hidden"); 
    }
  }
});


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