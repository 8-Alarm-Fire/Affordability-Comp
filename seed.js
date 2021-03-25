const { client } = require('./DataBase/mongo.js');
const { Price } = require('./DataBase/schema.js');

async function drop() {
  client.db('mortgage').collection('price').drop();
}

async function seed() {
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 10000; i++) {
    const randomPrice = 10000 * (Math.floor(Math.random() * 250) + 50);
    const entry = new Price({ id: i, homePrice: randomPrice });
    // eslint-disable-next-line no-await-in-loop
    await client.db('mortgage').collection('price').insertOne(entry);
  }
}

module.exports.drop = drop;
module.exports.seed = seed;
