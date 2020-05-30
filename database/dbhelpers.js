const database = require('./index');

module.exports = {
  getAll: () => database.find(),
  findOne: (id, callback) => {
  let queryStr = `SELECT * FROM reviews WHERE id =${id}`;
    database
      //.collection('reviews')
      //uncomment below for mong
      //.find({id: Number(id)}),
      .query(queryStr, (err, results)=>{
        if(err) console.error(err)
        console.log(results.rows);
        callback(results.rows);
      })
    },

  searchQuery: (obj) =>
    database.aggregate([
      { $match: { image: { $regex: `image${obj.image}.png` } } },
      { $unwind: '$reviews' },
      {
        $match: {
          'reviews.review': { $regex: `${obj.queryStr}`, $options: 'i' }
        }
      }
    ]),
  getRatings: (id) => database.find({ productID: id }),
  postReview: (obj) =>
    database.findOneAndUpdate(
      { _id: obj.id },
      {
        $addToSet: {
          reviews: {
            rating: obj.rating,
            title: obj.title,
            review: obj.review,
            recommendation: obj.recommendation,
            nickname: obj.nickname,
            email: obj.email,
            age: {
              noAge: obj.age.noAge,
              under18: obj.age.under18,
              between1824: obj.age.between1824,
              between2534: obj.age.between2534,
              between3544: obj.age.between3544,
              between4554: obj.age.between4554,
              between5565: obj.age.between5565,
              over65: obj.age.over65
            },
            bodyType: {
              atheletic: obj.bodyType.atheletic,
              curvy: obj.bodyType.curvy,
              lean: obj.bodyType.lean,
              muscular: obj.bodyType.muscular,
              petite: obj.bodyType.petite,
              slim: obj.bodyType.slim,
              solid: obj.bodyType.solid
            },
            location: obj.location,
            wearTo: {
              practiceYoga: obj.wearTo.practiceYoga,
              dance: obj.wearTo.dance,
              cycle: obj.wearTo.cycle,
              run: obj.wearTo.run,
              wearCasually: obj.wearTo.wearCasually
            },
            likes: obj.likes,
            dislikes: obj.dislikes
          }
        }
      }
    )

};
