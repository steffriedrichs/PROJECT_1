// create new game:
var myGame = new Game(); 

$(document).ready(function(){

//function to load a new game
function startGame(myGame){
  // remove "You won" box, when new game is started:
  // $("#win").fadeOut();
  $("#win").remove();
  //get Board Size from user's choice: 
  myGame.n = Number($("input[name='Size']:checked").attr("id"));
  myGame.board = myGame.randomMatrix(myGame.n);
  myGame.stones = myGame.randomMatrix(myGame.n);
  myGame.isRow = true;
  myGame.userSelection = 0;
  //display Board, empty first: 
  $("#gameBoard").empty();
  // set moves counter to 0:
  myGame.movesMade = 0;
  $("#scoreNumbers").replaceWith('<span id="scoreNumbers">0</span>');
  // create correct number (n * n) of DOM elements: 
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
      if(myGame.stones[row][col]==0){ //if stone has 1 = existing
        $(".stone.stone"+row+col).toggleClass("hidden"); 
      } 
    }
  }
  // set first row as default activation:
  activateFieds(true,0,myGame.n); 
}

//initialize a first game to be displayed upon loading:
startGame(myGame);

// create a new Game when size is changed or "new Game" button is clicked:
$("input, #newGameButton").click(function(){
  startGame(myGame);
});

function activateFieds(isRow,userSelection,n){
  switch(isRow) {
    case true:
      for(var col = 0; col < n; col++){
        $(".field.field"+userSelection+col).toggleClass("active"); 
      }
      break;
    case false:
      for(var row = 0; row < n; row++){
        $(".field.field"+row+userSelection).toggleClass("active");
      } 
      break;
  } 
}

// keyes a,s,w,d for selection of the row or column
document.addEventListener('keydown', function(e){
  e.preventDefault();
  // save previous settinge
  var sel = myGame.userSelection;
  var iro = myGame.isRow; 
  // get new selection
  switch(e.key){
    case "ArrowLeft":
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

    case "ArrowRight":
      if(myGame.userSelection < (myGame.n-1)){
        myGame.userSelection++;
      }else{
        myGame.userSelection = 0;
      }   
      myGame.isRow = false;
      activateFieds(iro,sel,myGame.n);
      activateFieds(myGame.isRow,myGame.userSelection,myGame.n); 
      break;

    case "ArrowUp":    
      if(myGame.userSelection > 0){
        myGame.userSelection--;
      }else{
        myGame.userSelection = (myGame.n-1);
      }   
      myGame.isRow = true;
      activateFieds(iro,sel,myGame.n);
      activateFieds(myGame.isRow,myGame.userSelection,myGame.n); 
      break;

    case "ArrowDown":    
      if(myGame.userSelection < (myGame.n-1)){ 
        myGame.userSelection++;
      }else{
        myGame.userSelection = 0;
      }
      myGame.isRow = true;
      activateFieds(iro,sel,myGame.n);
      activateFieds(myGame.isRow,myGame.userSelection,myGame.n);  
      break;
  } 
});

function moveStones(moved,myGame){
  if(moved){
    // update moves:
    myGame.movesMade++;
    $("#scoreNumbers").replaceWith('<span id="scoreNumbers">'+myGame.movesMade+'</span>');
    // create new set of stones for graphical representation:
    $(".stone").removeClass("hidden");
    for(var row = 0; row < myGame.n; row++ ){
      for(var col = 0; col < myGame.n; col++ ){
        if(myGame.stones[row][col]==0){ //if stone has 1 = existing
          $(".stone.stone"+row+col).toggleClass("hidden"); 
        } 
      }
    }
  }
  if(myGame.checkWin()){
    $(".flexbox").append('<div id="win"><p>You won!<p><p>With '+myGame.movesMade+' Moves.<p></div>');
  }
}

document.addEventListener('keydown', function(e){
  var moved = false;
  e.preventDefault();
  if(myGame.isRow==true){
    switch(e.key) {
      case "a":  
        moved = myGame.makeMove(true, myGame.userSelection, -1); // update stones array
        moveStones(moved, myGame); // visual display
        break;
      case "d": 
        moved = myGame.makeMove(true, myGame.userSelection, 1);
        moveStones(moved, myGame);
        break;
      case "w": 
        moved = myGame.makeMove(true, myGame.userSelection, -2);
        moveStones(moved, myGame);
        break;
      case "s": 
        moved = myGame.makeMove(true, myGame.userSelection, 2);
        moveStones(moved, myGame);
        break; 
    }
  }else{ 
    switch(e.key) {
      case "w": 
        moved = myGame.makeMove(false, myGame.userSelection, -1);
        moveStones(moved, myGame);
        break;
      case "s": 
        moved = myGame.makeMove(false, myGame.userSelection, 1);
        moveStones(moved, myGame);
        break;
      case "a":  
        moved = myGame.makeMove(false, myGame.userSelection, -2); 
        moveStones(moved, myGame);
        break;
      case "d": 
        moved = myGame.makeMove(false, myGame.userSelection, 2);
        moveStones(moved, myGame);
        break;        
      }
  }
});
	

});  // end of document ready