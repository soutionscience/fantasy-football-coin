let coin1 = artifacts.require('./Coin1')

contract('coin1', function(accounts) {
  it("should assert true", function(done) {
    var coin1 = coin1.deployed();
    assert.isTrue(true);
    done();
  });
});
