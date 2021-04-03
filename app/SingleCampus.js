import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  loadSingleCampus,
  unload,
  updateStudent,
  deleteCampus,
} from './store/thunks';
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
    // console.log(this.props);
  }

  componentWillUnmount() {
    this.props.unload();
  }

  handleDelete(ev) {
    ev.preventDefault();
    const { singleCampus, history } = this.props;

    // console.log(history);
    this.props.deleteCampus(singleCampus.id, history);
  }

  handleUnregister(student) {
    const { history } = this.props;
    // console.log(this.props);
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
    campuses: state.campuses,
    singleCampus: state.singleCampus,
  };
};

//const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    loadSingleCampus: (id) => dispatch(loadSingleCampus(id)),
    unload: () => dispatch(unload()),
    deleteCampus: (id, history) => dispatch(deleteCampus(id, history)),
    // deleteCampus: (id, history) => console.log(history),
    unregister: ({ firstName, lastName, email, gpa, id, campusId, history }) =>
      dispatch(
        updateStudent(firstName, lastName, email, gpa, id, campusId, history)
      ),
    // unregister: ({ firstName, lastName, email, gpa, id, campusId, history }) =>
    //   console.log(history),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
