const studentRouter = require('express').Router();
const { Campus, Student } = require('../db/Models');

studentRouter.get('/', async (req, res, next) => {
  console.log('im hitting the students');
  try {
    const studentList = await Student.findAll();
    console.log(studentList);
    res.send(studentList);
  } catch (error) {
    console.log(`error in /students `, error);
    next(error);
  }
});

module.exports = studentRouter;
