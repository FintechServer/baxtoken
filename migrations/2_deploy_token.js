var BaxToken = artifacts.require("BaxToken");

module.exports = function(deployer) {
  deployer.deploy(BaxToken);
};
