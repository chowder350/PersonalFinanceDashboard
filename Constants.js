console.log(process.env.REACT_APP_PLAID_CLIENT_ID);
export const APP_PORT = process.env.REACT_APP_APP_PORT || 8000;
export const PLAID_CLIENT_ID = process.env.REACT_APP_PLAID_CLIENT_ID;
export const PLAID_SECRET = process.env.REACT_APP_PLAID_SECRET;
export const PLAID_ENV = process.env.REACT_APP_PLAID_ENV || 'sandbox';

console.log(process.env.REACT_APP_PLAID_CLIENT_ID);
// Parameters used for the OAuth redirect Link flow.
//
// Set PLAID_REDIRECT_URI to 'http://localhost:8000/oauth-response.html'
// The OAuth redirect flow requires an endpoint on the developer's website
// that the bank website should redirect to. You will need to configure
// this redirect URI for your client ID through the Plaid developer dashboard
// at https://dashboard.plaid.com/team/api.
export const PLAID_REDIRECT_URI = process.env.PLAID_REDIRECT_URI || '';

// We store the access_token in memory - in production, store it in a secure
// persistent data store
let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
let ITEM_ID = null;
// The payment_id is only relevant for the UK Payment Initiation product.
// We store the payment_id in memory - in production, store it in a secure
// persistent data store
let PAYMENT_ID = null;

// Initialize the Plaid client
// Find your API keys in the Dashboard (https://dashboard.plaid.com/account/keys)
export const client = new plaid.Client({
  clientID: PLAID_CLIENT_ID,
  secret: PLAID_SECRET,
  env: plaid.environments[PLAID_ENV],
  options: {
    version: '2019-05-29',
  },
});

console.log(client)