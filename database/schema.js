require
DROP DATABASE IF EXISTS reviews;

CREATE DATABASE productReviews;

// We can create our reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER,
  rating INTEGER,
  title TEXT,
  review TEXT,
  recommendation BOOLEAN,
  nickname TEXT,
  email TEXT,
  age TEXT,
  bodyType TEXT,
  location TEXT,
  wearTo TEXT,
  likes TEXT,
  dislikes TEXT
);

//Mongo Schema below
// var mongoose = require('mongoose');

// var ReviewsSchema = new mongoose.Schema({
//   reviews: [
//     {
//       rating: Number,
//       title: String,
//       review: String,
//       recommendation: Boolean,
//       nickname: String,
//       email: String,
//       age: {
//         noAge: Boolean,
//         under18: Boolean,
//         between1824: Boolean,
//         between2534: Boolean,
//         between3544: Boolean,
//         between4554: Boolean,
//         between5565: Boolean,
//         over65: Boolean
//       },
//       bodyType: {
//         athletic: Boolean,
//         curvy: Boolean,
//         lean: Boolean,
//         muscular: Boolean,
//         petite: Boolean,
//         slim: Boolean,
//         solid: Boolean
//       },
//       location: String,
//       wearTo: {
//         practiceYoga: Boolean,
//         dance: Boolean,
//         cycle: Boolean,
//         run: Boolean,
//         wearCasually: Boolean
//       },
//       likes: String,
//       dislikes: String,
//       created_at: {
//         type: Date,
//         default: new Date()
//       }
//     }
//   ],
//   image: String,
//   productTitle: String,
//   productID: Number
// });

module.exports = reviews;

/*
First Schema

// var ReviewsSchema = new mongoose.Schema({
//   rating: Number,
//   title: String,
//   review: String,
//   recommendation: Boolean,
//   nickname: String,
//   email: String,
//   age: {
//     noAge: Boolean,
//     under18: Boolean,
//     between1824: Boolean,
//     between2534: Boolean,
//     between3544: Boolean,
//     between4554: Boolean,
//     between5565: Boolean,
//     over65: Boolean
//   },
//   bodyType: {
//     athletic: Boolean,
//     curvy: Boolean,
//     lean: Boolean,
//     muscular: Boolean,
//     petite: Boolean,
//     slim: Boolean,
//     solid: Boolean
//   },
//   location: String,
//   wearTo: {
//     practiceYoga: Boolean,
//     dance: Boolean,
//     cycle: Boolean,
//     run: Boolean,
//     wearCasually: Boolean
//   },
//   likes: String,
//   dislikes: String,
//   image: String
// })
*/
