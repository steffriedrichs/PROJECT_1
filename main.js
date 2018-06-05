  // create new game:
  var myGame = new Game(); 

  // TO DO:  get n from user's choice; default is 3
  var n = 3;

  myGame.board = myGame.randomMatrix(n);
  myGame.stones = myGame.randomMatrix(n);


$(document).ready(function(){

  //var html = '';
  // memoryGame.cards.forEach(function (pic, index) {
  //   html += '<div class= "card" id="card_' + pic.name + '">';
  //   html += '<div class="back"';
  //   html += '    name="'       + pic.img +  '">';
  //   html += '</div>';
  //   html += '<div class="front" ';
  //   html += 'style="background: url(img/' + pic.img + ') no-repeat">';
  //   html += '</div>';
  //   html += '</div>';
  // });

// Add all the div's to the HTML
  //document.getElementById('memory_board').innerHTML = html;


//$('.class).on('click', function () {
  // if makeMove returns true -> call 'check, if won' function
//}


});  // end of document ready