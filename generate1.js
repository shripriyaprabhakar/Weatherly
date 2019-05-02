const _db = require('./database');
const mongoose = require('mongoose');

const db = require('./database/models/weather.js').Weather;
console.log(typeof db);

function highTemp(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function lowTemp(min, max) {
  return Math.random() * (max - min) + min;
}

function Pleasant(min, max) {
  return Math.random() * (max - min) + min;
}

 const reviews = [];

  // createWeatherReviews = () => {
    for (let i = 0; i < 4; i += 1) {
        const review = {};
        review.weatherForNext5days = highTemp(26 ,33);
        review.weatherForNext28days = highTemp(13 ,18);
        review.suggestions = "Go sailing";
        reviews.push(review);
    }
   // } 
        // const reviewItem = new db.Weather(review);
      db.insertMany(reviews, (err) => {
        console.log(err)
        mongoose.connection.close()
      });
       
      
  //    Promise.all(reviews)
  //     .then((results) => {
  //       console.log('sample item', results);
  //       console.log(`${results.length} entrys saved in DataBase`);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  //     .then(() => {
  //       mongoose.connection.close(() => {
  //         process.exit(0);
  //       });
  //     });
     
  //   return reviews;
  // }
  

// createWeatherReviews();

console.log(reviews);