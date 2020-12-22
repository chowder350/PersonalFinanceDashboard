import React, { Component } from "react";
import axios from 'axios';
import AccountBalanceGraph from './AccountBalanceGraph'



class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
    };

  }


  componentDidMount = async () =>{
  
  }

  render() {
    return (
    <div>
      <p>Dashboard</p>
      <AccountBalanceGraph/>
    </div>
      
    );
  }
}

export default Dashboard;