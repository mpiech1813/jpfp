const studentRouter = require('express').Router();
const { Student } = require('../db/Models');

studentRouter.get('/', async (req, res, next) => {
  console.log('im hitting the students');
  try {
    const studentList = await Student.findAll();
    res.status(201).send(studentList);
  } catch (error) {
    console.log(`error in /students `, error);
    next(error);
  }
});

module.exports = studentRouter;
