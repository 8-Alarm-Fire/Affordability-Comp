const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://user:${process.env.REACT_APP_ENTRY_KEY}@multistepcheckout.mum9y.mongodb.net/mortgage?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useUnifiedTopology: true });

client.connect();
module.exports.client = client;
