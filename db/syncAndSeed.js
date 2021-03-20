const db = require('./db');
const { Campuse, Student, Campus } = require('./Models');
const faker = require('faker');

const syncAndSeed = async () => {
  await db.sync({ force: true });

  let campuses = [];
  for (let i = 0; i < 3; i++) {
    campuses.push(faker.company.companyName());
  }

  let students = [];
  for (let i = 0; i < 20; i++) {
    let student = {};
    student.firstName = faker.name.firstName();
    student.lastName = faker.name.lastName();
    student.campusId = Math.floor(Math.random() * 3) + 1;
    students.push(student);
  }

  //   let students = [];
  //   for (let i = 0; i < 20; i++) {
  //     let firstName = faker.name.firstName();
  //     let lastName = faker.name.lastName();
  //     let campusId = Math.floor(Math.random() * Math.floor(3)) + 1;
  //     students.push({
  //       firstName,
  //       lastName,
  //       campusId,
  //     });
  //   }

  console.log(students);

  await Promise.all(
    campuses.map((name) => {
      return Campus.create({ name });
    })
  );
  await Promise.all(
    students.map((student) => {
      return Student.create(student);
    })
  );
};

module.exports = syncAndSeed;
