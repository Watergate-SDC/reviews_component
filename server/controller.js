const database = require('../database/dbhelpers');

module.exports = {
  getAll: (req, res) => {
    database
      .getAll()
      .then((data) => res.status(200).send(data))
      .catch((err) => res.status(400).send(err));
  },
  getOne: (req, res) => {
    let { id } = req.params;
    database
      .getOne(id)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => res.status(400).send(err));
  },
  searchQuery: (req, res) => {
    // let {query} = req.body
    console.log('reqQuery', req.query)
    let obj = {
      image: req.params.id,
      queryStr: req.query.query
    }
    database
      .searchQuery(obj)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => res.status(400).send(err));
  }
};
