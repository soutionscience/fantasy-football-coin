pragma solidity ^0.4.22;


contract Coin1 {
  //name and symbol of coin
  string public constant name = "football fantacy coin";
  string public constant symbol = "FFC";

  // decimal units of currency
  uint public constant decimal = 6;

  //total supply of unit
  uint256 public totalSupply;

  //balances of accounts
  mapping(address=> uint256) balances;

  constructor(uint256 initialSupply) public {
    totalSupply = initialSupply;

    //add balance to contract creator
    balances[msg.sender] = totalSupply;
  }



  // transfer from calling account to recepient
  function transfer(address _from, address _to, uint256 _value) public returns(bool success){
    //check if value is less than sender and return false
    if(_value > 0 && _value > balances[msg.sender] ){
      return false;
    }
    //reduce sender balance and add _to balance
    balances[msg.sender] -= _value;
    balances[_to] += _value;

    //emit the event
    emit Transfer(_from, _to, _value );

  }
  event Transfer(address _from, address _to, uint256 _value);
}
