import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Campuses extends Component {
  render() {
    const { campuses } = this.props;
    return (
      <div>
        <div className="titleBar">
          <div className="centerTitleBar">
            <h3>Here is the list of all the campuses</h3>
          </div>
          <div className="rightTitleBar">
            <Link className="create" to="/campuses/newCampus">
              <button>Create New Campus</button>
            </Link>
          </div>
        </div>

        {campuses.length !== 0 ? (
          <div className="list">
            {campuses.map((campus) => {
              return (
                <div key={campus.id} className="card">
                  <img src={campus.imageUrl}></img>
                  <div>
                    <Link to={`/campuses/id/${campus.id}`}>{campus.name}</Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>There are no registered campuses</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses,
  };
};

export default connect(mapStateToProps, null)(Campuses);
