const stuRouter = require('express').Router();
const { Campus, Student } = require('../db/Models');

stuRouter.get('/:id', async (req, res, next) => {
  try {
    const singleStudent = await Student.findByPk(req.params.id, {
      include: [Campus],
      where: {
        campusId: Student.id,
      },
    });
    res.status(201).send(singleStudent);
  } catch (error) {
    console.log(`error in /students/id/:id`, error);
    next(error);
  }
});

module.exports = stuRouter;
