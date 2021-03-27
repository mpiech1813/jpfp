import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleCampus, unloadCampus } from './store/thunks';
import { Link } from 'react-router-dom';

class SingleCampus extends Component {
  componentDidMount() {
    const idNum = this.props.match.params.id;
    this.props.loadSingleCampus(idNum);
  }

  componentWillUnmount() {
    this.props.unloadCampus();
  }

  render() {
    const { singleCampus } = this.props;
    const { students } = singleCampus;
    // console.log(students);

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

//const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleCampus: (id) => dispatch(loadSingleCampus(id)),
    unloadCampus: () => dispatch(unloadCampus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
