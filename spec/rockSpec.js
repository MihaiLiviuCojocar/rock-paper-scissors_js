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

  it("is played by two players", function(){
    player1 = new Player("Silent Bob");
    player2 = new Player("Mini Me");
    game = new Game(player1, player2);
    expect(game.player1.name).toBe("Silent Bob");
    expect(game.player2.name).toBe("Mini Me");
  });

});