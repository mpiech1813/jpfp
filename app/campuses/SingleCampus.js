import React, { Component } from 'react';
import { connect } from 'react-redux';
import { unload } from '../store/thunks/thunks';
import { loadSingleCampus, deleteCampus } from '../store/thunks/campusThunks';
import { updateStudent } from '../store/thunks/studentThunks';
import { Link } from 'react-router-dom';

class SingleCampus extends Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
    this.handleUnregister = this.handleUnregister.bind(this);
  }
  componentDidMount() {
    const idNum = this.props.match.params.id;
    this.props.loadSingleCampus(idNum);
  }

  componentWillUnmount() {
    this.props.unload();
  }

  handleDelete(ev) {
    ev.preventDefault();
    const { singleCampus, history } = this.props;

    this.props.deleteCampus(singleCampus.id, history);
    const idNum = this.props.match.params.id;
    this.props.loadSingleCampus(idNum);
  }

  handleUnregister(student) {
    const { history } = this.props;
    this.props.unregister({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      gpa: student.gpa,
      id: student.id,
      campusId: null,
      history,
    });
  }

  render() {
    const { singleCampus } = this.props;
    const { students } = singleCampus;
    const { handleDelete, handleUnregister } = this;

    return (
      <div>
        {singleCampus.id ? (
          <div>
            <img src={singleCampus.imageUrl} />
            <div>
              <p>
                <u>Campus Name</u>: {singleCampus.name}
              </p>
              <p>
                <u>Campus Address</u>: {singleCampus.address}
              </p>
              <p>
                <u>Campus Description</u>: {singleCampus.description}
              </p>
              {students.length !== 0 ? (
                <div>
                  <p>
                    <u>List of Students Currently Attending This Campus:</u>
                  </p>
                  <ul>
                    {students.map((student) => {
                      return (
                        <li key={student.id}>
                          <Link to={`/students/id/${student.id}`}>
                            {student.firstName} {student.lastName}{' '}
                          </Link>
                          <button onClick={() => handleUnregister(student)}>
                            Unregister
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                <div>
                  <p>There are no students currently attending this campus</p>
                </div>
              )}
            </div>
            <button onClick={handleDelete}>X</button>

            <Link to={`/campuses/id/${singleCampus.id}/updateCampus`}>
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <p>loading...</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    singleCampus: state.singleCampus,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    loadSingleCampus: (id) => dispatch(loadSingleCampus(id)),
    unload: () => dispatch(unload()),
    deleteCampus: (id, history) => dispatch(deleteCampus(id, history)),
    unregister: ({ firstName, lastName, email, gpa, id, campusId, history }) =>
      dispatch(
        updateStudent(firstName, lastName, email, gpa, id, campusId, history)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
