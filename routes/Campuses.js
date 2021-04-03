const campusRouter = require('express').Router();
const { Campus, Student } = require('../db/Models');

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
    const { name, address, description } = req.body;
    const newCampus = await Campus.create({
      name,
      address,
      description,
    });
    res.status(201).send(newCampus);
  } catch (error) {
    console.log('error occured in campuses.post');
    next(error);
  }
});

campusRouter.delete('/id/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const campus = await Campus.findByPk(id);
    await campus.destroy();
    res.sendStatus(204);
  } catch (error) {
    console.log('error occured in campus delete');
    next(error);
  }
});

campusRouter.put('/id/:id', async (req, res, next) => {
  try {
    const { name, address, description, id } = req.body;
    const student = await Campus.findByPk(id);
    res.send(await student.update({ name, address, description }));
  } catch (error) {
    console.log(`error occured in campus.put`, error);
    next(error);
  }
});

module.exports = campusRouter;
