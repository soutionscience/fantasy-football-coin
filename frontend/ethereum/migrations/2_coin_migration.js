var Coin1 = artifacts.require("./Coin3.sol");

module.exports = function(deployer) {
  deployer.deploy(Coin1);
};