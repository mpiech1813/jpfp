const campusRouter = require('express').Router();
const { Campus, Student } = require('../db/Models');

campusRouter.get('/', async (req, res, next) => {
  try {
    const campusList = await Campus.findAll();
    res.send(campusList);
  } catch (error) {
    console.log(`error in /campuses `, error);
    next(error);
  }
});

module.exports = campusRouter;
