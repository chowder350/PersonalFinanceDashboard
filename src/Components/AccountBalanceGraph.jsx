import React, {Component} from 'react'
import { PlaidLink } from 'react-plaid-link';
import plaid from 'plaid'
import axios from 'axios';



class AccountBalanceGraph extends Component {
  constructor() {
    super()
    this.state = {
     
    }
  }
  handleOnSuccess(token, metadata) {
    // send token to client server
    //console.log(token)
  }
  handleOnExit() {
    // handle the case when your user exits Link
  }

 componentDidMount(){
  //console.log(process.env.REACT_APP_PLAID_CLIENT_ID);
 }
  


  render() {
    return (
      // <PlaidLink
      //   clientName="Dashboard"
      //   env="development"
      //   product={["auth", "transactions"]}
      //   publicKey="PLAID_PUBLIC_KEY"
      //   onExit={this.handleOnExit}
      //   onSuccess={this.handleOnSuccess}>
      //   Open Link and connect your bank!
      // </PlaidLink>
      <p>test</p>
       
    )
  }
}

export default AccountBalanceGraph;