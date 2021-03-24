import React from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
  const { students, campuses } = props;
  return (
    <div>
      <h2>
        Welcome to the JPFP page. There are currently {students.length} students
        and {campuses.length} campuses.
      </h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    students: state.students,
    campuses: state.campuses,
  };
};

export default connect(mapStateToProps, null)(Home);
