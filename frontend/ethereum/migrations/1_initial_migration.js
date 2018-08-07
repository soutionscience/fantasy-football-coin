var CoinV1 = artifacts.require("./CoinV1.sol");

module.exports = function(deployer) {
  deployer.deploy(CoinV1, 1000000000);
};
