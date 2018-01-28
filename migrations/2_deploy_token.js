var BaxToken = artifacts.require("BaxToken");

module.exports = async function(deployer, network) {
  await deployer.deploy(BaxToken);

  const token = await BaxToken.deployed();
  const cap = await token.cap();

  if (network != 'development') {
    await token.mint('0xa43d028a9c974669eb3a11264f15a617c40344bb', cap.times(0.40)); // sale
    await token.mint('0xa43d028a9c974669eb3a11264f15a617c40344bb', cap.times(0.02)); // bounty
    await token.mint('0x2d88414ca41355695fca854507d6a11616f74a97', cap.times(0.20)); // team
    await token.mint('0x2ba8fb879cb4262002453ab9502248ac5ee87fc8', cap.times(0.18)); // reserve
    await token.mint('0x37db36d8b352bd22c10113aa5e6ec9409c50c4f1', cap.times(0.20)); // future sale
  }
};
