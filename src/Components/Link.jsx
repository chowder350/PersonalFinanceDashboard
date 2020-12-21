import React, { Component } from "react";
import PlaidLink from "react-plaid-link";
import axios from 'axios';
import {localhostApi} from '../Constants'


class Link extends Component {
  constructor() {
    super();

    this.state = {
      data: "",
      linkToken: '',
    };

  }


  componentDidMount = async () =>{
    var response = await axios.get("/express_backend")
    //console.log(response.data["express"]);
    this.setState({data:response.data["express"] })

    var response = await axios.post("/create_link_token")
    this.setState({linkToken: response.data["link_token"]})
    //console.log(response)

    
  }

   



 
  render() {
    console.log(this.state.linkToken)
    return (
      <div>
        <div>
          <button onClick={this.handleClick}>Get Transactions</button>
          <p>{this.state.data}</p>
        </div>
      </div>
    );
  }
}

export default Link;