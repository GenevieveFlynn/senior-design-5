// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21;

// Smart contract for rental contract payments
contract RentalContract {

    // Checks balance of account
    function getBalance() public view returns(uint) {
        return address(this).balance;
    }

    // Send money from one account to another account (transaction of money)  
    function send_money(address payable _To) public payable returns (bool) {
        _To.transfer(msg.value);
        return true;
    }

    // Upon start of new contract, initiate the start of monthly recurring payments
    // Set up monthly recurring payments
    // function setupMonthlyPayments() {

    // }

    // Terminate smart contract
    // function terminateContract() {

    // }

    // Convert USD to ETH
    // function convertToETH() {

    // }
}