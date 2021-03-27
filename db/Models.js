const { STRING, TEXT, DECIMAL } = require('sequelize');
const db = require('./db');

const Campus = db.define(
  'campus',
  {
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
        'https://giantbomb1.cbsistatic.com/uploads/original/1/14440/1455265-lair_sc2_rend1.jpg',
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
      defaultValue: 'Default Campus Description',
    },
  },
  { timestamps: false }
);

const Student = db.define(
  'student',
  {
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
  },
  { timestamps: false }
);

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {
  Campus,
  Student,
};
