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

Game.prototype.winner = function(){
  if(this.player1.picks == this.player2.picks){
    return "Same picks ... nobody wins";
  }else{
    return player1;
  }
};