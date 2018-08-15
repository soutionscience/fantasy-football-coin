var CoinV1 = artifacts.require("./CoinV1.sol");
var CoinV2 = artifacts.require("./CoinV2.sol");

module.exports = function(deployer) {
  deployer.deploy(CoinV1, 1000000000);
  deployer.deploy(CoinV2, 1000000000)
};
