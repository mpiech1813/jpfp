const studentRouter = require('express').Router();
const { Student } = require('../db/Models');

studentRouter.get('/', async (req, res, next) => {
  // console.log('im hitting the students');
  try {
    const studentList = await Student.findAll();
    res.status(201).send(studentList);
  } catch (error) {
    console.log(`error in /students `, error);
    next(error);
  }
});

studentRouter.post('/', async (req, res, next) => {
  try {
    const { firstName, lastName, email, gpa } = req.body;
    const newStudent = await Student.create({
      firstName,
      lastName,
      email,
      gpa,
    });
    res.status(201).send(newStudent);
  } catch (error) {
    console.log('error occured in studentRouter.post');
    next(error);
  }
});

studentRouter.delete('/id/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = Student.findByPk(id);
    student.destroy();
  } catch (error) {
    console.log('error occured in student delete');
    next(error);
  }
});

module.exports = studentRouter;
