var memory_array = ['0','0','1','1','2','2','3','3','4','4','5','5','6','6','7','7'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

var flip_turn = 0;
var card_check = 0;
var card_safe ='';
var round_count = 0;
var match_count = 0;
var player_count = 1; //welcher Spieler am Zug ist
var points_player1 = 0;
var points_player2 = 0;
var player_amount = 0;

$().ready(function(){
  
  newBoard();
  round_count = round_count + 1;
  output = '<p class="score_text">Runde: '+round_count+'</p><p class="score_text">Gefunden: '+match_count+'/8</p><p class="score_text">Spieler 1 ist am Zug</p>';
  document.getElementById('score_board').innerHTML = output;
  round_count = round_count - 1;
  player_amount = prompt("Wie viele Spieler?", "Bitte in Zahlen!");
  $("div.memory").click(function(){



    if(flip_turn == 0) {
      card_safe = $(this);
      $(this).hide();
      flip_turn = 1;
      card_check =$(this).attr("data-card-id");



    } else {


      $(this).hide();
      if($(this).attr("data-card-id") == card_check){
        flip_turn = 0;
        match_count = match_count + 1;
        player_count = round_count % player_amount;
        player_count = player_count + 1;
        round_count = round_count + 1;
        output = '<p class="score_text">Runde: '+round_count+'</p><p class="score_text">Gefunden: '+match_count+'/8</p><p class="score_text">Spieler '+player_count+' ist am Zug</p>';
        document.getElementById('score_board').innerHTML = output;
      } else {
        $(this).delay(700).fadeIn(200);
        $(card_safe).delay(700).fadeIn(200);
        flip_turn = 0;
        round_count = round_count + 1;
        
        player_count = round_count % player_amount;
        player_count = player_count + 1;
        round_count = round_count + 1;
        output = '<p class="score_text">Runde: '+round_count+'</p><p class="score_text">Gefunden: '+match_count+'/8</p><p class="score_text">Spieler '+player_count+' ist am Zug</p>';
        round_count = round_count + -1;

      } 
      document.getElementById('score_board').innerHTML = output;
    }

  });

});

function newBoard(){
  tiles_flipped = 0;
  var output = '';
    memory_array.memory_tile_shuffle();
  for(var i = 0; i < memory_array.length; i++){
    output += '<div class="memory_card card_id'+memory_array[i]+'" ><div class="memory" data-card-id="'+memory_array[i]+'"></div></div>'
  }
  document.getElementById('memory_board').innerHTML = output;
}

function delay(){};
