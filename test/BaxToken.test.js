var BaxToken = artifacts.require("BaxToken");

contract('BaxToken', async function(accounts) {
  var eth = web3.eth;

  var token, cap, account;

  before( async function() {
    token = await BaxToken.deployed();
    cap = await token.cap();
    account = accounts[0];
  });

  it("should have token details set", async function() {
    assert.equal(await token.name(), 'BAX');
    assert.equal(await token.symbol(), 'BAX');
    assert.equal(await token.decimals(), 18);
  });

  it("should succeed in minting up to the cap", async function() {
    await token.mint(account, cap.times(0.40)); // main sale
    await token.mint(account, cap.times(0.20)); // future sale
    await token.mint(account, cap.times(0.20)); // team
    await token.mint(account, cap.times(0.18)); // reserve
    await token.mint(account, cap.times(0.02)); // bounty
    assert.equal((await token.totalSupply()).toString(), cap.toString());
  });

  it("should be able to transfer", async function() {
    await token.transfer(accounts[1], 1000);
    assert.equal(await token.balanceOf(accounts[1]), 1000);
    assert.equal((await token.balanceOf(accounts[0])).toString(), (await token.totalSupply()).minus(1000).toString());
  });

  it("should fail to mint after cap is reached", async function() {
    try {
      await token.mint(account, 1000);
    } catch (error) {
      return;
    }
    assert.fail();
  });

  it("should be able to mint after burning, if still minting", async function() {
    await token.burn(1000);
    await token.mint(account, 1000);
  });

  it("should fail to mint after burning, if minting disabled", async function() {
    await token.finishMinting();
    await token.burn(1000);
    try {
      await token.mint(account, 1000);
    } catch (error) {
      return;
    }
    assert.fail();
  });
});
