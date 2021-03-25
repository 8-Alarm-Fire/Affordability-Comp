const { MongoClient } = require('mongodb');

console.log(process.env.REACT_APP_ENTRY_KEY);

const uri = `mongodb+srv://user:${process.env.REACT_APP_ENTRY_KEY}@multistepcheckout.mum9y.mongodb.net/mortgage?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useUnifiedTopology: true });

module.exports.db = client.connect();
module.exports.client = client;
