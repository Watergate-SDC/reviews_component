const router = require('express').Router();
const controller = require('./controller');

router.route('/reviews').get(controller.getAll);
router.route('/reviews/searchQuery/:id').get(controller.searchQuery);

router.route('/reviews/:id').get(controller.getOne);

router.route('/reviews/rating/:id').get(controller.getRatings)


module.exports = router;
