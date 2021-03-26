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

campusRouter.post('/', async (req, res, next) => {
  try {
    // console.log(req.body);
    const { name, address } = req.body;
    const newCampus = await Campus.create({
      name,
      address,
    });
    res.status(201).send(newCampus);
  } catch (error) {
    console.log('error occured in campuses.post');
    next(error);
  }
});

module.exports = campusRouter;
