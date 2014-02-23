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