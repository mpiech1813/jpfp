import React from 'react';
import { connect } from 'react-redux';
import { deleteStudent } from './store/store';

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

const mapStateToProps = (state) => {
  return {
    students: state.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: (id) => dispatch(deleteStudent(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);
