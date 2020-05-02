const router = require('express').Router();
const controller = require('./controller');

router.route('/reviews').get(controller.getAll);

router.route('/reviews/:id').get(controller.getOne);

module.exports = router;
