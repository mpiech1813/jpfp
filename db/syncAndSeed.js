const db = require('./db');
const { Campuse, Student, Campus } = require('./Models');
const faker = require('faker');

const syncAndSeed = async () => {
  await db.sync({ force: true });

  let campuses = [];
  for (let i = 0; i < 5; i++) {
    let campus = {};
    campus.name = faker.company.companyName();
    campus.imageUrl = faker.image.imageUrl();
    campus.address = faker.address.streetAddress();
    campus.description = faker.lorem.words(20);
    campuses.push(campus);
  }

  let students = [];
  for (let i = 0; i < 20; i++) {
    let student = {};
    student.firstName = faker.name.firstName();
    student.lastName = faker.name.lastName();
    student.email = faker.internet.email();
    student.imageUrl = faker.image.imageUrl();
    student.gpa = Math.round(Math.random() * 4 * 10) / 10;
    student.campusId = Math.floor(Math.random() * 4) + 1; //making random number to be always 1 less than max number of campuses to have 1 campus empty for front-end messages
    students.push(student);
  }

  await Promise.all(
    campuses.map((name) => {
      return Campus.create(name);
    })
  );
  await Promise.all(
    students.map((student) => {
      return Student.create(student);
    })
  );
};

module.exports = syncAndSeed;
