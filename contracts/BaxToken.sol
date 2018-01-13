pragma solidity ^0.4.18;


/**
 * Use OpenZeppelin Libraries 1.5.0
 *   https://registry.npmjs.org/zeppelin-solidity/-/zeppelin-solidity-1.5.0.tgz
 *   sha512-X4Z7JNarpK71BqiHn/vYrKM1Xul/YeDM9Wr8i2TnTPZSmsUWFy4R4vRxyMk3td58UKvApidWejtgHOC7rkSSew==",
 */
import 'zeppelin-solidity/contracts/token/StandardToken.sol';
import 'zeppelin-solidity/contracts/token/BurnableToken.sol';
import 'zeppelin-solidity/contracts/token/CappedToken.sol';


contract BaxToken is StandardToken, BurnableToken, CappedToken {
  string public constant name = "BAX";
  string public constant symbol = "BAX";
  uint8 public constant decimals = 18;

  // 50B tokens
  uint256 public constant MAX_SUPPLY = 50 * (10**9) * (10 ** uint256(decimals));

  /**
   * @dev Set the maximum issuance cap.
   */
  function BaxToken() CappedToken( MAX_SUPPLY ) public {

  }
}
