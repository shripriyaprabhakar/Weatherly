const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
  weatherForNext5days: String,
  weatherForNext28days: String,
  suggestions: String,
});

const Weather = mongoose.model('Weather', WeatherSchema);

module.exports = {
	Weather,
};