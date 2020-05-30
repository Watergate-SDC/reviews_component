//commenting out mongo and mongoose to implement postgres connection
// var mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/JJACDReviews', {useNewUrlParser: true});

// const connectWithRetry = () => {
//   console.log('MongoDB connection with retry')
//   mongoose.connect("mongodb://localhost:27017/test").then(()=>{
//     console.log('MongoDB is connected')
//   }).catch(err=>{
//     console.log('MongoDB connection unsuccessful, retry after 5 seconds.')
//     setTimeout(connectWithRetry, 5000)
//   })
// }

// connectWithRetry();

// var Reviews = mongoose.model('reviews', schema);

//create postgres pool
const {Pool} = require('pg');
const pool = new Pool({
  user: "ralba_000",
  host: "localhost",
  database: "ralba_000",
  password: "",
  port: 5432,
});
//pool.connect();
//on connection query the db and check for resposne

//not sure if need schema
//var schema = require('./schema')

//need something to export besides the reviews mongo schema that was built
module.exports = pool;


