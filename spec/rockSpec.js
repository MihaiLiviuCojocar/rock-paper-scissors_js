describe("Player", function(){

  it("has a name", function(){
    player = new Player("Silent Bob");
    expect(player.name).toBe("Silent Bob");
  });

});