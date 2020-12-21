require('dotenv').config();
const moment = require("moment");
const express = require("express");
const plaid = require("plaid")
const app = express();
const PORT = 4090;

const ACCESS_TOKEN = null;
const PUBLIC_TOKEN = null;
const ITEM_ID = null;

// Initialize the Plaid client
const client = new plaid.Client({
  clientID: process.env.REACT_APP_PLAID_CLIENT_ID,
  secret: process.env.REACT_APP_PLAID_SECRET,
  env: plaid.environments.sandbox,
});

console.log(client)

app.use(express.json());

// create a GET route
app.get('/express_backend', (req, response) => {
  response.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

//updated link_token 
app.post('/create_link_token', async (request, response, next) => {
  try{
    // 1. Grab the client_user_id by searching for the current user in your database
    const user = "nah"
    const clientUserId = "wow123";
    // 2. Create a link_token for the given user
    const linkTokenResponse = await client.createLinkToken({
      user: {
        client_user_id: clientUserId,
      },
      client_name: 'My App',
      products: ['transactions'],
      country_codes: ['US'],
      language: 'en',
    });
    const link_token = linkTokenResponse.link_token;
    // 3. Send the data to the client
    response.json({ link_token });
  }
  catch(e){
    console.log(e)
  }
 
});



app.listen(PORT, () => {
console.log(`Server running on ${PORT}`);
});