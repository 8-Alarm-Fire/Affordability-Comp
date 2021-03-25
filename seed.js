const mongo = require('./DataBase/mongo.js');
const { Price } = require('./DataBase/schema.js');

async function drop() {
  await mongo.client.connect();
  mongo.client.db('mortgage').collections('price').deleteMany();
}

async function DataGen() {
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 100; i++) {
    const randomPrice = 10000 * (Math.floor(Math.random() * 250) + 50);

    const entry = new Price({ id: i, homePrice: randomPrice });
    // eslint-disable-next-line no-await-in-loop
    await client.db('mortgage').collection('price').insertOne(entry);
  }
  console.log('seeding complete');
}
// drop();
// DataGen();
