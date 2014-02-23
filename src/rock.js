Player = function(name){
  this.name = name;
};

Player.prototype.picks = function(pick){
  return this.pick =  pick;
};

Game = function(player1, player2){
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function(){
  if(this.player1.pick == this.player2.pick){
    return "Same picks ... nobody wins";
  };

  scenarios = [
                "paper beats rock",     "paper beats spock",
                "rock beats scissors",  "rock beats lizard",
                "scissors beats paper", "scissors beats lizard",
                "lizard beats spock",   "lizard beats paper",
                "spock beats rock",     "spock beats scissors"
              ];

  for (i=0; i < scenarios.length; i++){
    if((this.player1.pick + " beats " + this.player2.pick).match(scenarios[i])) {
      return this.player1;
    }
  };

  return this.player2;

};