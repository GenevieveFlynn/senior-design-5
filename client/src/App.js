import React, { Component } from "react";
import RentalContract from "./contracts/RentalContract.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, balances: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = RentalContract.networks[networkId];
      const instance = new web3.eth.Contract(
        RentalContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance, balances: new Array(10)}, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Send money from one account to another account (transaction of money)
    // 1,000,000,000,000,000,000 Wei = 1 ETH 1 * 10^18 
    contract.methods.send_money(accounts[1]).send({from: accounts[0], value: 1000000000000000000 }).then((error, tranasctionHash)=>{alert(tranasctionHash);});

    //const response = await contract.methods.get().call();
    //this.setState({ storageValue:this.state.web3.utils.hexToNumber(this.state.web3.utils.toHex(response))});

  };

  // Front end website
  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h2>Smart Contract Example</h2>
        <div>Account 0: {this.state.accounts[0]} </div>
        <div>Account 1: {this.state.accounts[1]} </div>
      </div>
    );
  }
}

export default App;
