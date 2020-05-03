const database = require('./index');

module.exports = {
  getAll: () => database.find({}),
  getOne: (image) => database.find({ image: { $regex: `image${image}.png` } }),
  searchQuery: (obj) => database.aggregate([{"$match": {"image": {$regex: `image${obj.image}.png`}}},
    {"$unwind": "$reviews"},{$match: {"reviews.review": {$regex: `${obj.queryStr}`, $options: "i"}}}
  ])

};
