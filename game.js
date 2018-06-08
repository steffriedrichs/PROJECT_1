// game constructor
  function Game(){
  this.board = [];
  this.stones = [];
  this.n = 3;
  this.score = 0;
  this.isRow = true;
  this.userSelection = 0;
  this.movesMade = 0;
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
  // select x random fields to be marked: 
  var numFieldstoSelect = Math.round(n*n/2); 
  //  OR (first numbers): var numFieldstoSelect = 2*n - 1;
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

// function to move the stones, checks, if move is possible:
Game.prototype.makeMove = function (isRow, userSelection, moveDirection) {
  // isRow = true for row and isRow = false for column
  // userSelection in (0,..., n-1) -> a row or col index
  // moveDirection:  +- 1 for "main" direction, +-2 for other direction

  switch(isRow){
    case true:   // row

    //move right:  
      if(moveDirection == 1 && this.stones[userSelection][this.n-1] == 0){ 
        this.stones[userSelection].pop(); 
        this.stones[userSelection].unshift(0);
        return true;
    //move left:    
      }else if(moveDirection == -1 && this.stones[userSelection][0] == 0){ 
        this.stones[userSelection].shift();
        this.stones[userSelection].push(0);   
        return true;
    //move up:    
      }else if(moveDirection == -2 && userSelection != 0){ 
        var moveOk = true; //check, if places for moved stones are available
        for(var i = 0; i < this.n; i++){
          if(this.stones[userSelection][i]==1 && this.stones[userSelection-1][i]==1){
            moveOk = false;
          }
        }
        if(moveOk==true){
          //stones will now be in upper row (current row will be empty)
          for(var i = 0; i < this.n; i++){
            // only update positions in upper row to where stones will be shifted,
            if(this.stones[userSelection][i]==1){ 
              this.stones[userSelection-1][i] = 1;
            } 
            this.stones[userSelection][i] = 0;
          } 
          return true;
        }
    //move down:
      }else if(moveDirection == 2 && userSelection < this.n-1){ 
        var moveOk = true; //check, if places for moved stones are available
        for(var i = 0; i < this.n; i++){
          if(this.stones[userSelection][i]==1 && this.stones[userSelection+1][i]==1){
            moveOk = false;
          }
        }
        if(moveOk==true){
          for(var i = 0; i < this.n; i++){
            if(this.stones[userSelection][i]==1){ 
              this.stones[userSelection+1][i] = 1;
            } 
            this.stones[userSelection][i] = 0;
          } 
          return true;
        }
      }else{
        return false; // row movement not possible
      }
    break;

  case false: // column

    var myCol = []; //get current column
    for(var j = 0; j < this.n; j++){
      myCol.push(this.stones[j][userSelection]);
    }
    //move down:
      if(moveDirection == 1 && myCol[this.n-1] == 0){
        myCol.pop(); 
        myCol.unshift(0);
        for(var k = 0; k < this.n; k++){
          this.stones[k][userSelection]=myCol[k];
        }
        return true;
    //move up:  
      }else if(moveDirection == -1 && myCol[0] == 0){
        myCol.shift();
        myCol.push(0);  
        for(var k = 0; k < this.n; k++){
          this.stones[k][userSelection] = myCol[k];
        } 
        return true;
    //move left:        
      }else if(moveDirection == -2 && userSelection > 0){
        var moveOk = true; //check, if places for moved stones are available
        for(var i = 0; i < this.n; i++){
          if(this.stones[i][userSelection]==1 && this.stones[i][userSelection-1]==1){
            moveOk = false;
          }
        }
        if(moveOk==true){
          for(var i = 0; i < this.n; i++){
            if(this.stones[i][userSelection]==1){ 
              this.stones[i][userSelection-1] = 1;
            } 
            this.stones[i][userSelection] = 0;
          } 
          return true;
        }
    //move right:     
      }else if(moveDirection == 2 && userSelection < this.n-1){
        var moveOk = true; //check, if places for moved stones are available
        for(var i = 0; i < this.n; i++){
          if(this.stones[i][userSelection]==1 && this.stones[i][userSelection+1]==1){
            moveOk = false;
          }
        }
        if(moveOk==true){
          for(var i = 0; i < this.n; i++){
            if(this.stones[i][userSelection]==1){ 
              this.stones[i][userSelection+1] = 1;
            } 
            this.stones[i][userSelection] = 0;
          } 
          return true;
        }
      }else{
        return false; // column movement not possible
      }
      break;
  } // end switch
} // end function

// check if game was won:
Game.prototype.checkWin = function () {
  // compare board array and stones array, 
  // put array elements in string for comparison
  if( ('' + this.board) == ('' + this.stones) ){
    return true;
  }else{
    return false;
  }
}