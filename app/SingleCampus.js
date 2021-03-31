import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleCampus, unloadCampus } from './store/thunks';
import { Link } from 'react-router-dom';
import { deleteCampus } from './store/thunks';

class SingleCampus extends Component {
  constructor() {
    super();

    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    const idNum = this.props.match.params.id;
    this.props.loadSingleCampus(idNum);
    // console.log(this.props);
  }

  componentWillUnmount() {
    this.props.unloadCampus();
  }

  handleDelete(ev) {
    ev.preventDefault();
    const { singleCampus, history } = this.props;

    // console.log(history);
    this.props.deleteCampus(singleCampus.id, history);
  }

  render() {
    const { singleCampus } = this.props;
    const { students } = singleCampus;
    const { handleDelete } = this;
    // console.log(this.props);

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
                            {student.firstName} {student.lastName}
                          </Link>
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
    unloadCampus: () => dispatch(unloadCampus()),
    deleteCampus: (id, history) => dispatch(deleteCampus(id, history)),
    // deleteCampus: (id, history) => console.log(history),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
