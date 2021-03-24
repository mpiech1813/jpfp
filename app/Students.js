import React from 'react';
import { connect } from 'react-redux';
import { deleteStudent } from './store/thunks';

const Students = (props) => {
  const { students } = props;
  return (
    <div>
      <h3>This is the list of all students</h3>
      <div className="list">
        {students.map((student) => {
          return (
            <div key={student.id} className="card">
              <img src={student.imageUrl}></img>
              <div className="info">
                <p>First Name: {student.firstName}</p>
                <p>Last Name: {student.lastName}</p>
                <p>Email: {student.email}</p>
                <p>GPA: {student.gpa}</p>
              </div>
            </div>
          );
        })}
      </div>
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
