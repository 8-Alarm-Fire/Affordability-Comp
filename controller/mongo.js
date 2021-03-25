/* eslint-disable array-callback-return */
const schema = require('../DataBase/schema.js');
const { client } = require('../DataBase/mongo');

module.exports = {
  get: ({ params }, res) => {
    // client.connect();
    const num = Number(params.id);
    client.db('mortgage').collection('price').findOne({ id: num })
      .catch((err) => {
        res.status(401);
        throw new Error(err);
      })
      .then((result) => {
        res.send(result);
      });
  },
  getAll: (req, res) => {
    // mongo.connect();
    schema.Price.find((err, data) => {
      if (err) {
        res.status(404);
      } else {
        res.status(200).send(data);
        // mongo.db.close();
      }
    });
  },
};
