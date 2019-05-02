const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/weatherdata');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('we are connected!');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;