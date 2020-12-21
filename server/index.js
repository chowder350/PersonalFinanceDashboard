const express = require("express");
const app = express();
const PORT = 4090;

const {
    receivePublicToken,
    getTransactions, 
    createLinkToken
    } = require("./controllers/controller");

app.use(express.json());

//updated link_token 
app.post('/create_link_token', async (request, response, next) => {
    // 1. Grab the client_user_id by searching for the current user in your database
    const user = await User.find(...);
    const clientUserId = user.id;
    // 2. Create a link_token for the given user
    const linkTokenResponse = await plaidClient.createLinkToken({
      user: {
        client_user_id: clientUserId,
      },
      client_name: 'My App',
      products: ['transactions'],
      country_codes: ['US'],
      language: 'en',
      webhook: 'https://sample.webhook.com',
    });
    const link_token = linkTokenResponse.link_token;
    // 3. Send the data to the client
    response.json({ link_token });
  });

// Get the public token and exchange it for an access token
app.post("/auth/public_token", receivePublicToken);
// Get Transactions
app.get("/transactions", getTransactions);

app.post("/link/token/create", createLinkToken)



app.listen(PORT, () => {
console.log(`Server running on ${PORT}`);
});