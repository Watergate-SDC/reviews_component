var mongoose = require('mongoose')

var ReviewsSchema = new mongoose.Schema({
  reviews: [
    {
      rating: Number,
      title: String,
      review: String,
      recommendation: Boolean,
      nickname: String,
      email: String,
      age: {
        noAge: Boolean,
        under18: Boolean,
        between1824: Boolean,
        between2534: Boolean,
        between3544: Boolean,
        between4554: Boolean,
        between5565: Boolean,
        over65: Boolean
      },
      bodyType: {
        athletic: Boolean,
        curvy: Boolean,
        lean: Boolean,
        muscular: Boolean,
        petite: Boolean,
        slim: Boolean,
        solid: Boolean
      }, 
      location: String,
      wearTo: {
        practiceYoga: Boolean,
        dance: Boolean,
        cycle: Boolean,
        run: Boolean,
        wearCasually: Boolean
      },
      likes: String,
      dislikes: String,
    }
  ],
  image: String
})



module.exports = ReviewsSchema


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