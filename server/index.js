/* eslint-disable no-console */
const express = require('express');

// const mongo = require('../DataBase/mongo.js');
// const { MongoClient } = require('mongodb');
// const { Price } = require('../DataBase/schema.js');
// const { client } = require('../DataBase/mongo');
const mongoCont = require('../controller/mongo.js');
// const path = require('path')

const app = express();
const PORT = process.env.PORT || 8020;

app.use(express.json());
app.use('/mortgage/:id', express.static('client/dist'));

app.get('*/:id/db', mongoCont.get);
// app.get('dbs', mongoCont.getAll);

app.listen(PORT, () => {
  console.log(process.env.REACT_APP_ENTRY_KEY);
  console.log(`Listening on 127.0.0.1:${PORT}`);
});
