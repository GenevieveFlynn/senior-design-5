// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }

  function getBalance() public view returns(uint) {
    return address(this).balance;
  }
        
  function send(address payable _To )public payable returns (bool) {
    _To.transfer(msg.value);
    return true;
  }
}
