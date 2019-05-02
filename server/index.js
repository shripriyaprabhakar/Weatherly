const ctrl = require('../database/controllers/weather.js');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/posts', (req, res) => {
	console.log('recieved post')
  ctrl.findWeatherAndSuggest( (err, result) => {
  	// console.log('hi')
    if (err) {
      res.send(err);
      return null;
    } else {
      res.send(result);
      return null;
    }
  });
});

let port = 5000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

