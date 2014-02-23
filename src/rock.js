Player = function(name){
  this.name = name;
};

Player.prototype.picks = function(pick){
  return this.picks =  pick;
};

Game = function(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
};