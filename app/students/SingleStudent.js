import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  deleteStudent,
  loadSingleStudent,
} from '../store/thunks/studentThunks';
import { unload } from '../store/thunks/thunks';
import { Link } from 'react-router-dom';

class SingleStudent extends Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    const idNum = this.props.match.params.id;
    this.props.loadSingleStudent(idNum);
  }

  componentWillUnmount() {
    this.props.unload();
  }

  handleDelete(ev) {
    ev.preventDefault();
    const { singleStudent, history } = this.props;
    this.props.deleteStudent(singleStudent.id, history);
  }

  render() {
    const { singleStudent } = this.props;
    const { handleDelete } = this;
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
            {singleStudent.campus ? (
              <Link to={`/campuses/id/${singleStudent.campus.id}`}>
                <u>Currently Attending</u>: {singleStudent.campus.name}
              </Link>
            ) : (
              <p>Currently Not Attending Any Campus</p>
            )}

            <button onClick={handleDelete}>X</button>

            <Link to={`/students/id/${singleStudent.id}/updateStudent`}>
              Edit
            </Link>
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

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    loadSingleStudent: (id) => dispatch(loadSingleStudent(id)),
    unload: () => dispatch(unload()),
    deleteStudent: (id, history) => dispatch(deleteStudent(id, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
