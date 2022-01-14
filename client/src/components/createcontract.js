import React, { Component } from "react";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../getWeb3";

import "../assets/CreateContract.css"

class CreateContract extends Component {

  constructor(props) {
    super(props);
    this.state = {
      l_account_num: null,
      t_account_num: null,
      monthly_amount: null,
      num_months: null,
      storageValue: 0, 
      web3: null, 
      accounts: null, 
      contract: null, 
      balances: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance, balances: new Array(10)}, this.runExample);
    } 
    catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // Try just sending money once on form submission and ignoring the number of months input
    if (this.state.contract) {
      this.state.contract.methods.send_money(this.state.l_account_num).send({from: this.state.t_account_num, value: (1000000000000000000 * this.state.monthly_amount)}).then((error, tranasctionHash)=>{alert(tranasctionHash);});
      //contract.methods.send_money(accounts[1]).send({from: accounts[0], value: 1000000000000000000 }).then((error, tranasctionHash)=>{alert(tranasctionHash);});

      alert('A new contract was submitted! The landlord account number is '+ this.state.l_account_num + 
    ', the tenant account number is ' + this.state.t_account_num + ', the monthly payment amount is '
     + this.state.monthly_amount + ', and the number of months is ' + this.state.num_months + '.');
    }
    else {
      alert('Contracts was null.');
    }

    event.preventDefault();
  }

  // Submit the contract on click of submit button
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <h1> New Contract </h1>
            <input type="text" placeholder="Landlord account number" name="l_account_num" onChange={this.handleInputChange}></input>
            <input type="text" placeholder="Tenant account number" name="t_account_num" onChange={this.handleInputChange}></input>
            <input type="text" placeholder="Monthly Amount" name="monthly_amount" onChange={this.handleInputChange}></input>
            <input type="text" placeholder="Number of Months" name="num_months" onChange={this.handleInputChange}></input>
            <input type="submit" value="Submit Contract"></input>
        </form>
    );
  }
};

export default CreateContract;
