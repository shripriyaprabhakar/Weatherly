const models = require('../models/weather.js');

const findWeatherAndSuggest = (callback) => {
	// console.log('hi');
    models.Weather.findOne({}, (err, result) => {
      if (err) {
      	console.log('data not here')
        callback(err)
      } else {
      	console.log('data is here')
      callback(err, result);
    };
  });
  
};

module.exports = {
	findWeatherAndSuggest,
};

/*
  get: (req, res) => {
    models.Review.find({ room_id: Number(req.params.roomId) }, (err, reviews) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(reviews);
      }
    });
  },
*/