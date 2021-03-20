const router = require('express').Router();
const studentRouter = require('./Students');
const campusRouter = require('./Campuses');

router.use('/students', studentRouter);
router.use('/campuses', campusRouter);

module.exports = router;
