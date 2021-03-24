const router = require('express').Router();
const studentRouter = require('./Students');
const campusRouter = require('./Campuses');
const campRouter = require('./Campus');
const stuRouter = require('./Student');

router.use('/students', studentRouter);
router.use('/campuses', campusRouter);
router.use('/campuses/id', campRouter);
router.use('/students/id', stuRouter);

module.exports = router;
