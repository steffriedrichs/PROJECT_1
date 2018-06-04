


$(document).ready(function(){

  // create new game:
  var myGame = new Game(); 

  // TO DO:  get n from user's choice
  var n = 3;

  myGame.board = randomMatrix(n);
  myGame.stones = randomMatrix(n);

  var html = '';
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
  document.getElementById('memory_board').innerHTML = html;


//$('.class).on('click', function () {
  
//}


});  // end of document ready