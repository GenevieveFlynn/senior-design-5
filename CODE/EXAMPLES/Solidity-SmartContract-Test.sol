// SPDX-License-Identifier: UNLICENSED

// From https://docs.soliditylang.org/en/v0.8.8/introduction-to-smart-contracts.html
// A Simple Smart Contract
// Let us begin with a basic example that sets the value
// of a variable and exposes it for other contracts to access.
// It is fine if you do not understand everything right now, we
// will go into more detail later.

pragma solidity >=0.4.16 <0.9.0;

contract SimpleStorage {
    uint storedData;
    
    function set(uint x) public {
        storedData = x;
    }
    
    function get() public view returns (uint) {
        return storedData;
    }
}