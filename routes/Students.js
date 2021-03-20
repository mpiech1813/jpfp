const studentRouter = require('express').Router();
const { Campus, Student } = require('../db/Models');

studentRouter.get('/', async (req, res, next) => {
  try {
    const studentList = await Student.findAll();
    res.send(studentList);
  } catch (error) {
    console.log(`error in /students `, error);
    next(error);
  }
});

module.exports = studentRouter;
