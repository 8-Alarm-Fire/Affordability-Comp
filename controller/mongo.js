/* eslint-disable array-callback-return */
const { client } = require('../DataBase/mongo');
const { drop, seed } = require('../seed');

module.exports = {
  get: ({ params }, res) => {
    const id = Number(params.id);
    client.db('mortgage').collection('price').findOne({ id })
      .catch((err) => {
        res.status(401);
        throw new Error(err);
      })
      .then((result) => {
        res.send(result);
      });
  },
  reSeed: (req, res) => {
    drop()
      .then(
        () => {
          seed()
            .then(
              () => { res.status(201).send('reseeded DB'); },
            );
        },
      );
  },
};
