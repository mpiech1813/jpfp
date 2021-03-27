import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Campuses extends Component {
  render() {
    const { campuses } = this.props;
    // console.log(campuses);
    return (
      <div>
        <h3>Here is the list of all the campuses</h3>
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
        <Link to="/campuses/newCampus">
          <button>Create New Campus</button>
        </Link>
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
