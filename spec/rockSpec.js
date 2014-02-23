describe("Player", function(){

  beforeEach(function(){
    player = new Player("Silent Bob");
  });

  it("has a name", function(){
    expect(player.name).toBe("Silent Bob");
  });

  it("can pick rock", function(){
    player.picks("rock");
    expect(player.picks).toBe("rock")
  });

  it("can pick paper", function(){
    player.picks("paper");
    expect(player.picks).toBe("paper");
  });

});

describe("Game", function(){

  beforeEach(function(){
    player1 = new Player("Silent Bob");
    player2 = new Player("Mini Me");
    game    = new Game(player1, player2);
  });

  it("is played by two players", function(){
    expect(game.player1.name).toBe("Silent Bob");
    expect(game.player2.name).toBe("Mini Me");
  });

  describe("Winning and loosing", function(){

    it("there can be a draw", function(){
      player1.picks("rock");
      player2.picks("rock");
      expect(game.winner()).toEqual("Same picks ... nobody wins");
    });

    it("there can be only one winner", function(){
      player1.picks("rock");
      player2.picks("paper");
      expect(game.winner()).toBe(player1);
    });

  });

  describe("Rules of the game", function(){

    it("rock beats scissors", function(){
      player1.picks("rock");
      player2.picks("scissors");
      expect(game.winner()).toBe(player1);
    });

    it("rock beats lizard", function(){
      player1.picks('rock');
      player2.picks("lizard");
      expect(game.winner()).toBe(player1);
    });

    it("paper beats rock", function(){
      player1.picks("paper");
      player2.picks("rock");
      expect(game.winner()).toBe(player1);
    });

    it("paper beats spock", function(){
      player1.picks("paper");
      player2.picks("spock");
      expect(game.winner()).toBe(player1);
    });

    it("scissors beats paper", function(){
      player1.picks("scissors");
      player2.picks("paper");
      expect(game.winner()).toBe(player1);
    });

    it("scissors beats lizard", function(){
      player1.picks("scissors");
      player2.picks("lizard");
      expect(game.winner()).toBe(player1);
    });

    it("spock beats rock", function(){
      player1.picks("spock");
      player2.picks("rock");
      expect(game.winner()).toBe(player1);
    });

    it("spock beats scissors", function(){
      player1.picks("spock");
      player2.picks("scissors");
      expect(game.winner()).toBe(player1);
    });

    it("lizard beats spock", function(){
      player1.picks("lizard");
      player2.picks("spock");
      expect(game.winner()).toBe(player1);
    });

    it("lizard beats paper", function(){
      player1.picks("lizard");
      player2.picks("paper");
      expect(game.winner()).toBe(player1);
    });


  });

});