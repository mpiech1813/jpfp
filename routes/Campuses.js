const campusRouter = require('express').Router();
const { Campus } = require('../db/Models');

campusRouter.get('/', async (req, res, next) => {
  try {
    const campusList = await Campus.findAll();
    res.status(201).send(campusList);
  } catch (error) {
    console.log(`error in /campuses `, error);
    next(error);
  }
});

module.exports = campusRouter;
