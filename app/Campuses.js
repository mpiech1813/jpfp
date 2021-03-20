import React from 'react';

const Campuses = (props) => {
  const { campuses } = props;
  return (
    <div>
      <h3>Here is the list of all the campuses</h3>
      {campuses.map((campus) => {
        return (
          <div key={campus.id}>
            <p>{campus.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Campuses;
