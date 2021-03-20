const router = require('express').Router();
const { Campus, Student } = require('../db/Models');

router.get('/students', async (req, res, next) => {
  try {
    const studentList = await Student.findAll();
    res.send(studentList);
  } catch (error) {
    console.log(`error in /students `, error);
    next(error);
  }
});

router.get('/campuses', async (req, res, next) => {
  try {
    const campusList = await Campus.findAll();
    res.send(campusList);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
