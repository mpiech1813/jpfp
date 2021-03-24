import React from 'react';
import { connect } from 'react-redux';

const Campuses = (props) => {
  const { campuses } = props;
  return (
    <div>
      <h3>Here is the list of all the campuses</h3>
      <div className="list">
        {campuses.map((campus) => {
          return (
            <div key={campus.id} className="card">
              <img src={campus.imageUrl}></img>
              <div>
                <p>{campus.name}</p>
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
    campuses: state.campuses,
  };
};

export default connect(mapStateToProps, null)(Campuses);
