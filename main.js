// create new game:
var myGame = new Game(); 

$(document).ready(function(){

//get Board Size from user's choice:
$( "input" ).click(function() {
  myGame.n = Number($("input[name='Size']:checked").attr("id"));
  myGame.board = myGame.randomMatrix(myGame.n);
  myGame.stones = myGame.randomMatrix(myGame.n);

  //display Board: create correct number (n * n) of DOM elements 
  $("#gameBoard").empty();
  var countRow = 0;
  var countCol = 0;
  for(var numFields = 0; numFields < myGame.n * myGame.n; numFields++ ){
    $("#gameBoard").append('<div class="field field'+numFields+' fieldSize'+myGame.n+'x'+myGame.n+'"></div>');
    $("#gameBoard").append('<div class="stone stone'+numFields+'"></div>');
    $(".stone.stone"+numFields).css({
      height:((100/myGame.n)/2)*3, 
      width: ((100/myGame.n)/2)*3,     
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

var userSelection = 0;
var isRow;
document.addEventListener('keydown', function(e){
  e.preventDefault();
  // aswd for selection of the row or column
  if( e.key === "a" ){
    if(userSelection > 0){
      userSelection--;
    }else{
      userSelection = (myGame.n-1);
    }      
    isRow = false;
  }  
  if( e.key === "d" ){   
    if(userSelection < (myGame.n-1)){
      userSelection++;
    }else{
      userSelection = 0;
    }   
    isRow = false;
  }
  if( e.key === "w" ){   
    if(userSelection > 0){
      userSelection--;
    }else{
      userSelection = (myGame.n-1);
    }   
    isRow = true;
  }
  if( e.key === "s" ){      
    if(userSelection < (myGame.n-1)){
      userSelection++;
    }else{
      userSelection = 0;
    }
    isRow = true;
  }

  var moveMade = false;
  if( e.key === "ArrowLeft" ){      
    myGame.makeMove(isRow, userSelection, -1);
    moveMade = true;
  }  
  if( e.key === "ArrowRight" ){ 
    myGame.makeMove(isRow, userSelection, 1);
    moveMade = true;
  }
  if( e.key === "ArrowUp" ){   
    myGame.makeMove(isRow, userSelection, 1);
    moveMade = true;
  }
  if( e.key === "ArrowDown" ){      
    myGame.makeMove(isRow, userSelection, -1);
    moveMade = true;
  }
  // update stones on board 
  // array of changed stone:
  var changedStones = [];

  // identify which stones have to be moved by number 'stone0'
  if(moveMade==true){
    for(var j = 1; j <= myGame.n; j++){
      changedStones.push(j*(userSelection+1));  
    }
    console.log("These stones were moved: "+changedStones);
  }else{
    console.log("Nothing changed");
  }

  // das sollten wahrscheinlich besser zwei funktionen sein ... 
});

	

// $( "#target" ).keydown(function() {
//   alert( "Handler for .keydown() called." );
// });

// 



// $( "rowSelector" ).click(function() {
//    $( this ).toggleClass("inactive");
// });

//maybe select row/col like in hearts example:
// $('.heart').click(function(){
//   $(this).addClass('on');
//   $(this).prevAll().addClass('on');
// });

});  // end of document ready