pragma solidity ^0.4.18;


/**
 * Use OpenZeppelin Libraries 1.5.0
 *   https://registry.npmjs.org/zeppelin-solidity/-/zeppelin-solidity-1.5.0.tgz
 *   sha512-X4Z7JNarpK71BqiHn/vYrKM1Xul/YeDM9Wr8i2TnTPZSmsUWFy4R4vRxyMk3td58UKvApidWejtgHOC7rkSSew==",
 */
import 'zeppelin-solidity/contracts/token/StandardToken.sol';
import 'zeppelin-solidity/contracts/token/BurnableToken.sol';
import 'zeppelin-solidity/contracts/token/CappedToken.sol';
import 'zeppelin-solidity/contracts/token/DetailedERC20.sol';


contract BaxToken is DetailedERC20, StandardToken, BurnableToken, CappedToken {
  /**
   * @dev Set the maximum issuance cap and token details.
   */
  function BaxToken()
    DetailedERC20('BAX', 'BAX', 18)
    CappedToken( 50 * (10**9) * (10**18) )
  public {

  }
}
