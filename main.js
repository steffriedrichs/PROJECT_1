// create new game:
var myGame = new Game(); 

$(document).ready(function(){

//get Board Size from user's choice:
$( "input" ).click(function() {
  myGame.n = Number($("input[name='Size']:checked").attr("id"));
  myGame.board = myGame.randomMatrix(myGame.n);
  myGame.stones = myGame.randomMatrix(myGame.n);
  myGame.isRow = true;
  myGame.userSelection = 0;
  //display Board, empty first 
  $("#gameBoard").empty();
  // create correct number (n * n) of DOM elements 
  for(var row = 0; row < myGame.n; row++ ){
    for(var col = 0; col < myGame.n; col++ ){
    $("#gameBoard").append('<div class="field field'+row+col+' fieldSize'+myGame.n+'x'+myGame.n+'"></div>');
    $("#gameBoard").append('<div class="stone stone'+row+col+'"></div>');
    $(".stone.stone"+row+col).css({
      height:((100/myGame.n)/2)*3, 
      width: ((100/myGame.n)/2)*3,     
      top:((100/myGame.n)/4 + 100/myGame.n*row)*3,
      left: ((100/myGame.n)/4 + 100/myGame.n*col)*3 
    }); 
    //display marked fields in different color
    if(myGame.board[row][col]==1){ //if field has 1 = marked
      $(".field.field"+row+col).toggleClass("marked"); // selector: ".oneclass.otherclass"
    } 
    //add stones to board
    if(myGame.stones[row][col]==1){ //if stone has 1 = existing
      $(".stone.stone"+row+col).toggleClass("hidden"); 
    } 
    }
  }
  // set first row as default activation:
  activateFieds(true,0,myGame.n); 
});

function activateFieds(isRow,userSelection,n){
  switch(isRow) {
    case true:
      for(var col = 0; col < n; col++){
        $(".field.field"+userSelection+col).toggleClass("active"); 
        console.log("field: "+userSelection+" "+col);
      }
      break;
    case false:
      for(var row = 0; row < n; row++){
      $(".field.field"+row+userSelection).toggleClass("active");
      console.log("field: "+row+" "+userSelection); 
      } 
      break;
  } 
}


// detect selected row or column
document.addEventListener('keydown', function(e){
  e.preventDefault();
  // keyes a,s,w,d for selection of the row or column
  // save previous settinge
  var sel = myGame.userSelection;
  var iro = myGame.isRow; 
  switch(e.key) {
    case "a":
      if(myGame.userSelection > 0){
        myGame.userSelection--;
      }else{
        myGame.userSelection = (myGame.n-1);
      }      
      myGame.isRow = false;
      // deactivate old selection and activate newly selected fields
      activateFieds(iro,sel,myGame.n);
      activateFieds(myGame.isRow,myGame.userSelection,myGame.n); 
      break;

    case "d":
      if(myGame.userSelection < (myGame.n-1)){
        myGame.userSelection++;
      }else{
        myGame.userSelection = 0;
      }   
      myGame.isRow = false;
      // deactivate old selection and activate newly selected fields
      activateFieds(iro,sel,myGame.n);
      activateFieds(myGame.isRow,myGame.userSelection,myGame.n); 
      break;

    case "w":    
      if(myGame.userSelection > 0){
        myGame.userSelection--;
      }else{
        myGame.userSelection = (myGame.n-1);
      }   
      myGame.isRow = true;
      // deactivate old selection and activate newly selected fields
      activateFieds(iro,sel,myGame.n);
      activateFieds(myGame.isRow,myGame.userSelection,myGame.n); 
      break;

    case "s":    
      if(myGame.userSelection < (myGame.n-1)){ 
        myGame.userSelection++;
      }else{
        myGame.userSelection = 0;
      }
      myGame.isRow = true;
      // deactivate old selection and activate newly selected fields
      activateFieds(iro,sel,myGame.n);
      activateFieds(myGame.isRow,myGame.userSelection,myGame.n);  
      break;
  } 
});

document.addEventListener('keydown', function(e){
  
  var moveMade = false;
  if( e.key === "ArrowLeft" ){      
    myGame.makeMove(myGame.isRow, myGame.userSelection, -1);
    moveMade = true;
  }  
  if( e.key === "ArrowRight" ){ 
    myGame.makeMove(myGame.isRow, myGame.userSelection, 1);
    moveMade = true;
  }
  if( e.key === "ArrowUp" ){   
    myGame.makeMove(myGame.isRow, myGame.userSelection, 1);
    moveMade = true;
  }
  if( e.key === "ArrowDown" ){      
    myGame.makeMove(myGame.isRow, myGame.userSelection, -1);
    moveMade = true;
  }
  // update stones on board 
  // array of changed stone:
  var changedStones = [];

  // identify which stones have to be moved by number 'stone0'
  if(moveMade==true){
    for(var j = 1; j <= myGame.n; j++){
      changedStones.push(j*(myGame.userSelection+1));  
    }
    console.log("These stones were moved: "+changedStones);
  }else{
    // console.log("Nothing changed");
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