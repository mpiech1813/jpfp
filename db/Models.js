const { STRING, TEXT, DECIMAL } = require('sequelize');
const db = require('./db');

const Campus = db.define('campus', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: STRING,
    defaultValue:
      'https://static.wikia.nocookie.net/starcraft/images/b/bf/1._Lair_Default.jpg/revision/latest?cb=20200610103009',
  },
  address: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: TEXT,
  },
});

const Student = db.define('student', {
  firstName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },
  imageUrl: {
    type: STRING,
    defaultValue:
      'https://i.pinimg.com/originals/60/36/67/6036676c2cade38a0da4483e7291780b.jpg',
  },
  gpa: {
    type: DECIMAL,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
});

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  Campus,
  Student,
};
