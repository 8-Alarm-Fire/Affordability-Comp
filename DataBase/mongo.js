const mongoose = require('mongoose');

const url = 'mongodb://localhost/mortgage';

const connect = () => mongoose.connect(process.env.MONGODB_URI || url);

const db = mongoose.connection;

module.exports.db = db;
module.exports.connect = connect;
