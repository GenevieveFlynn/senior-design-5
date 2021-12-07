# Solidity Resources

1. [Soliity Documentation](https://docs.soliditylang.org/en/develop/)
2. [Learn How to Use Solidity - Microsoft Docs](https://docs.microsoft.com/en-us/learn/modules/blockchain-learning-solidity/)
3. [Solidity Tutorials](https://www.tutorialspoint.com/solidity/index.htm)
4. [Solidity Tutorial - Dapp University](https://www.dappuniversity.com/articles/solidity-tutorial)
5. [Solidity Tutorial - 101 Blockchains](https://101blockchains.com/solidity-tutorial/)
6. [Video - Build Your First Blockchain App Using Ethereum Smart Contracts and Solidity](https://www.youtube.com/watch?v=coQ5dg8wM2o)
7. [Video - Solidity For Beginners - Blockchain Tutorial For Beginners - Simplilearn](https://www.youtube.com/watch?v=YjbIrNRqiYU)
8. [Smart Contracts Examples and Use Cases](https://existek.com/blog/what-are-smart-contracts-examples-and-use-cases/)

### Solidity
A Smart Contract is deployed as byte code, but that does not imply you will have to write it that way. You will find various high-level languages in the community that compiles and converts your code to the EVM bytecode. The most popular one is Solidity. Solidity is an object-oriented and static language influenced by C++ or Javascript.

### Smart Contracts
Perhaps the best metaphor for a smart contract is a vending machine, as described by Nick Szabo. With the right inputs, a certain output is guaranteed.
- Smart Contract = back-end API running in the blockchain
- Dapp (Decentralized App) = front-end of the smart contract (visual application that allows the user to interact with the smart contract)

### Overview
Got this graphic from 101blockchains.com at [Solidity Tutorial - 101 Blockchains](https://101blockchains.com/solidity-tutorial/).
<a href='https://101blockchains.com/blockchain-infographics/'> <img src="https://101blockchains.com/wp-content/uploads/2021/05/solidity-tutorial.png" alt="solidity tutorial" border='0' /> </a>

### Syntax
1. [Solidity MSG Global Variables](https://medium.com/upstate-interactive/what-you-need-to-know-about-msg-global-variables-in-solidity-566f1e83cc69)
2. [Units and Global Variables](https://docs.soliditylang.org/en/v0.8.10/units-and-global-variables.html)
3. [Calling a Smart Contract from Javascript](https://ethereum.org/en/developers/tutorials/calling-a-smart-contract-from-javascript/)

### Notes
#### Calling Smart Contract (RentalContract.Sol) from App.js Javascript File
- 2 Addresses - sender & receiver (these will be inputted by the landlord when setting up the smart contract)<br>
`const senderAddress = "0x..."`<br>
`const receiverAddress = "0x..."`<br>
- Use balanceOf function to get the current amount at both addresses (
- Call 
  
#### Special Variables and Functions
**Variables**<br>
`block.number` - current block number<br>
`msg.data` - complete calldata<br>
`msg.value` - number of wei sent with the message<br>
`msg.sender` - sender of the message (current call)<br>
`tx.origin` - sender of the transaction (full call chain)<br>
`tx.gasprice` - gas price of the transaction<br>
**Functions**<br>
`<address payable>.send(uint) returns (bool)` - send given amount of wei to address, returns false on failure, forwards 2300 gas stipend, not adjustable<br>
`<address payable>.transfer(uint)` - send given amount of wei to address, reverts on failure, forwards 2300 gas stipend, not adjustable<br>
`<address>.balance` - balance of the address in wei<br>
`<address>.call(bytes) returns (bool, bytes)` - issue low-level call with the given payload, returns success condition and return data, forwards all available gas, adjustable<br>

#### Solidity - Send vs. Transfer
1. [Secure Ether Transfer](https://fravoll.github.io/solidity-patterns/secure_ether_transfer.html)
2. [Sending Ether](https://solidity-by-example.org/sending-ether/)
3. [Solidity - .send() vs .transfer()](https://vomtom.at/solidity-send-vs-transfer/)

You can send Ether to other contracts by:
1. transfer (2300 gas, throws error)
2. send (2300 gas, returns bool)
3. call (forward all gas or set gas, returns bool)

`require(<address>.send(amount))` is equal to `<address>.transfer(amount)`<br>
An overview over the differences of the three methods is given in the following table:

| Function    | Amount of Gas Forwarded        | Exception Propagation |
| ----------- | ------------------------------ | --------------------- |
| send        | 2300 (not adjustable)          | false on failure      |
| call.value  | all remaining gas (adjustable) | false on failure      |
| transfer    | 2300 (not adjustable)          | throws on failure     |

#### Contract Related
`this` - the current contract, explicitly convertible to address<br>
`selfdestruct(address payable)` - Destroy the current contract, sending its funds to the given Address and end execution.<br>

#### Error Handling
`require(bool, string)` - Reverts if the condition is not met - to be used for errors in inputs or external components. Also provides an error message.<br>
`assert` - Causes a Panic error and thus state change reversion if the condition is not met - to be used for internal errors.<br>
