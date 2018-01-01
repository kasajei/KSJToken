pragma solidity ^0.4.18;
import "zeppelin-solidity/contracts/token/StandardToken.sol";

contract KasajeiToken is StandardToken {
  string public name = "KasajeiToken";
  string public symbol = "KSJT";
  uint public decimals = 18;

  function KasajeiToken(uint initialSupply) public {
    totalSupply = initialSupply;
    balances[msg.sender] = initialSupply;
  }
}