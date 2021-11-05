// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
  uint storedData;

  // Set value of stored data
  function set(uint x) public {
    storedData = x;
  }

  // Get value of stored data
  function get() public view returns (uint) {
    return storedData;
  }

  // Checks balance of account
  function getBalance() public view returns(uint) {
    return address(this).balance;
  }

  // Send money from one account to another account (transaction of money)  
  function send_money(address payable _To) public payable returns (bool) {
    _To.transfer(msg.value);
    return true;
  }
}
