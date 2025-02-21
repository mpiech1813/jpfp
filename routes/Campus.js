const campRouter = require('express').Router();
const { Campus, Student } = require('../db/Models');

campRouter.get('/:id', async (req, res, next) => {
  try {
    const singleCampus = await Campus.findByPk(req.params.id, {
      include: [
        {
          model: Student,
        },
      ],
    });
    res.status(201).send(singleCampus);
  } catch (error) {
    console.log(`error in /campuses/id/:id`, error);
    next(error);
  }
});

module.exports = campRouter;
