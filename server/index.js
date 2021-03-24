/* eslint-disable no-console */
const express = require('express');
const mongoCont = require('../controller/mongo.js');
// const path = require('path')

const app = express();
const PORT = process.env.PORT || 8020;

app.use(express.json());
app.use('/mortgage/:id', express.static('client/dist'));

app.listen(PORT, () => {
  // document.history.push('/mortgage/5');
  console.log(`Listening on 127.0.0.1:${PORT}`);
});

app.get('*/:id/db', mongoCont.get);
// app.get('dbs', mongoCont.getAll);

app.use('/', (req, res) => {
  res.redirect(`http://${req.headers.host}/mortgage/${Math.floor(Math.random() * 100)}`);
});
