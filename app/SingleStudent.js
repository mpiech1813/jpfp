import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleStudent, unloadStudent } from './store/thunks';

class SingleStudent extends Component {
  componentDidMount() {
    const idNum = this.props.match.params.id;
    this.props.loadSingleStudent(idNum);
  }

  componentWillUnmount() {
    this.props.unloadStudent();
  }
  render() {
    const { singleStudent } = this.props;
    // console.log(singleStudent);
    return (
      <div>
        {singleStudent.id ? (
          <div>
            <img src={singleStudent.imageUrl} />
            <p>
              <u>Student's Name</u>: {singleStudent.firstName}{' '}
              {singleStudent.lastName}
            </p>
            <p>
              <u>Student's Email</u>: {singleStudent.email}
            </p>
            <p>
              <u>Student's GPA</u>: {singleStudent.gpa}
            </p>
            {singleStudent.campus.id ? (
              <p>
                <u>Currently Attending</u>: {singleStudent.campus.name}
              </p>
            ) : (
              <p>Currently Not Attending Any Campus</p>
            )}
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    singleStudent: state.singleStudent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleStudent: (id) => dispatch(loadSingleStudent(id)),
    unloadStudent: () => dispatch(unloadStudent()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
