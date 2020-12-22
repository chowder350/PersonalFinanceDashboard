import React, {Component} from 'react'
import axios from 'axios';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";



class AccountBalanceGraph extends Component {
  constructor() {
    super()
    this.state = {
     data:[],
    }
  }


 componentDidMount = async () =>{
   //make api request to get accout balance data
   if(sessionStorage.getItem("accessToken")){
    var data = {
        access_token: sessionStorage.getItem("accessToken")
    }
    console.log(sessionStorage.getItem("accessToken"))
    var response = await axios.post("/accounts_balance", data);
    this.setState({data: response.data["accounts"]});
    }
 }
 
  render() {
    const {data} = this.state;
    console.log(data);
    return (
      <MDBContainer>
      <h3 className="mt-5">Income Over Time</h3>
      <Line options={{ responsive: true }} />
      </MDBContainer>
       
    )
  }
}

export default AccountBalanceGraph;