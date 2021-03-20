import React from 'react';

const Students = (props) => {
  const { students } = props;
  return (
    <div>
      <h3>This is the list of all students</h3>
      {students.map((student) => {
        return (
          <div key={student.id}>
            <p>{student.firstName}</p>
            <p>{student.lastName}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Students;
