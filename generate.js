const mongoose = require('mongoose');

const db = require('./database/models/weather.js').Weather;
console.log(typeof db);


function highTemp(min, max) {
  return Math.random() * (max - min) + min;
}

function lowTemp(min, max) {
  return Math.random() * (max - min) + min;
}

function Pleasant(min, max) {
  return Math.random() * (max - min) + min;
}

class WeatherGenerator {
  constructor() {
    this.reviews = [];
  }
  

  createWeatherReviews() {
    for (let i = 0; i < 4; i += 1) {
        const review = {};
        review.weatherForNext5days = highTemp(26 ,33);
        review.weatherForNext28days = highTemp(13 ,18);
        review.suggestions = "Go sailing";
        
        // const reviewItem = new db.Weather(review);
        const temp = reviewItem.save();
        this.reviews.push(temp);
      }

    // close connection to db
    Promise.all(this.reviews)
      .then((results) => {
        console.log('sample item', results);
        console.log(`${results.length} entrys saved in DataBase`);
      })
      .catch((err) => {
        console.error(err);
      })
      .then(() => {
        mongoose.connection.close(() => {
          process.exit(0);
        });
      });
      console.log(this.reviews);
    return this.reviews;
  }
}

// db.Weather.remove({}).exec((err) => {
//   if (err) {
//     console.log(err);
//   }
  const reviewGenerator = new WeatherGenerator();
  const fakeReviews = reviewGenerator.createWeatherReviews();
// });


