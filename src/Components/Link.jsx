import React, { Component } from "react";
import {PlaidLink} from "react-plaid-link";
import axios from 'axios';
import {localhostApi} from '../Constants'
import {Redirect} from 'react-router-dom'


class Link extends Component {
  constructor() {
    super();

    this.state = {
      data: "",
      linkToken: "",
    };

  }


  componentDidMount = async () =>{
    var response = await axios.get("/express_backend")
    this.setState({data:response.data["express"] })

    var response = await axios.post("/create_link_token")
    this.setState({linkToken: response.data["link_token"]})

  }

  handleOnSuccess = async (public_token, metadata) => {
    // send token to client server
    var data = {
      public_token: public_token
    }
    var response = await axios.post("/exchange_public_token", data);
    console.log(response)
    //to do set accessToken into sessionStorage then move onto UI calls in other components.

  }

  handleOnExit() {
    // handle the case when your user exits Link
    <Redirect to="/dashboard"/>
  }

   
  render() {
    const {linkToken} = this.state

    return (
      
      <div>
       {linkToken.toString !== 'undefined' ? 
       <PlaidLink 
       token={linkToken.toString()} 
       env="sandbox" 
       onSuccess={this.handleOnSuccess}
       onExit={this.handleOnExit}>
         Enter In Account Info
         </PlaidLink> 
         : null
        }
      

        <div>
          <p>{this.state.data}</p>
        </div>
      </div>
    );
  }
}

export default Link;