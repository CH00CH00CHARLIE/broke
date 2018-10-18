'use strict';

var util = require('util');

var envvar = require('envvar');
var plaid = require('plaid');
var bodyParser = require('body-parser');
var moment = require('moment');

var PLAID_CLIENT_ID = envvar.string('PLAID_CLIENT_ID', '5bb63c2cf17fb3001118dd22');
var PLAID_SECRET = envvar.string('PLAID_SECRET', '25988c12c60164e32d73351e562718');
var PLAID_PUBLIC_KEY = envvar.string('PLAID_PUBLIC_KEY', 'ac25fbf77a17846194a680a183096a');
var PLAID_ENV = envvar.string('PLAID_ENV', 'development');

var ACCESS_TOKEN = null;
var PUBLIC_TOKEN = null;
var ITEM_ID = null;

var client = new plaid.Client(
  PLAID_CLIENT_ID,
  PLAID_SECRET,
  PLAID_PUBLIC_KEY,
  plaid.environments[PLAID_ENV],
  {version: '2018-05-22'}
);

client.exchangePublicToken(PUBLIC_TOKEN, function(error, tokenResponse) {
    if (error != null) {
      console.log(error);
      return null;
    }
    ACCESS_TOKEN = tokenResponse.access_token;
    ITEM_ID = tokenResponse.item_id;
    console.log(tokenResponse);
});


var startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
var endDate = moment().format('YYYY-MM-DD');

client.getTransactions(ACCESS_TOKEN, startDate, endDate, {
    count: 250,
    offset: 0,
  }, function(error, transactionsResponse) {
    if (error != null) {
      console.log(error);
    } else {
      console.log(transactionsResponse);
    }
});

