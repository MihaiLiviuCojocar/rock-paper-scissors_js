describe("Player", function(){

  it("has a name", function(){
    player = new Player("Silent Bob");
    expect(player.name).toBe("Silent Bob");
  });

  it("can pick rock", function(){
    player = new Player("Silent Bob");
    player.picks("rock");
    expect(player.picks).toBe("rock")
  });

});