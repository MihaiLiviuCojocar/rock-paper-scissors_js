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

  describe("winning and loosing", function(){

    it("there can be a draw", function(){
      player1.picks("rock");
      player2.picks("rock");
      expect(game.winner()).toEqual("Same picks ... nobody wins")
    });

  });

});