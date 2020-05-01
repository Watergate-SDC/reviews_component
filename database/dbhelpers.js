const database = require('./index');

module.exports = {
  getAll: () => database.find({}),
  getOne: (image) => database.find({ image: { $regex: `image${image}.png` } })
};
