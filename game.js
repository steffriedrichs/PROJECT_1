// game constructor
  function Game(){
  this.board = [];
  this.stones = [];
  this.n = 3;
  this.score = 0;
  }


// function to initialize a new board or stone-set:
Game.prototype.randomMatrix = function (n) {
  var matrix = [];
  // create empty matrix:
  for(j = 0; j < n; j++){
    var subMat = [];
    for(i = 0; i < n; i++){
      subMat.push(0);
    } 
    matrix.push(subMat);
  }
  // select x random fields to be marked: //var x = Math.round(n*n/2);  OR (first numbers)
  var numFieldstoSelect = 2*n - 1;
  // now select x random indices in the matrix:
  var selectedFields = [];
  while(selectedFields.length < numFieldstoSelect){
    // create two random indices
    var index = Math.floor(Math.random()*10)%n + '' + Math.floor(Math.random()*10)%n; 
    if(!selectedFields.includes(index)){
      selectedFields.push(index);
    }  
  }
  // the selected indices will be set to 1 (= occupied)
  for(j = 0; j < numFieldstoSelect; j++){
    matrix[Number(selectedFields[j][0])][Number(selectedFields[j][1])] = 1;
  }   
  // the created matrix is returned
  return matrix;
}

// check if a move is possible:
Game.prototype.checkMove = function (isRow, userSelection, moveDirection) {
  // take stones array. calculate new positions after move. 
  // if outside array -> not possible (-> display some red blinking.. )

// parameters:
//isRow=true for row and isRow=false for column
//userSelection in (0,..., n-1) -> a row or col index
//moveDirection:  +- 1 

// if it's a row, use first index as userSelection:
if(isRow){

  //if move can be made update stones array:
  if(moveDirection == 1 && a[userSelection][this.n-1] == 0){
    //this.stones[userSelection] = "moved line";
    a[userSelection].pop();
    a[userSelection].unshift(0);
    return true;
  }else if(moveDirection == -1 && a[userSelection][0] == 0){
    a[userSelection] = a[userSelection].slice(1).unshift(0); 
    return true;
  }else{  
    //return false, if move goes outside board:
    return false;
  }

  
}else{
  //use second index as userSelection
  a[][userSelection]


}


}

// check if game was won:
Game.prototype.checkWin = function () {
  // compare board array and stones array, 
  // put array elements in string for comparison
  if( ('' + this.board) == ('' + this.stones) ){
    return true;
  }else{
    return false;
  }
  // dispaly win (later: animation)

}