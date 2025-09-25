const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }

  const uri = process.env.MONGODB_URI;
  console.log('MongoDB URI:', uri); // <-- TEMP for debugging

  MongoClient.connect(uri, { useUnifiedTopology: true })
    .then((client) => {
      _db = client.db(); // 👈 Get the actual DB, not client
      console.log('Database initialized!');
      callback(null, _db);
    })
    .catch((err) => {
      console.error('Failed to connect to MongoDB:', err);
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};
