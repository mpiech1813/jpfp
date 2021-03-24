import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider, connect } from 'react-redux';

import NavBar from './NavBar';
import Students from './Students';
// import Campuses from './Campuses';
import { loadStudents, loadCampuses } from './store/thunks';
import Campuses from './Campuses';

class _App extends Component {
  componentDidMount() {
    this.props.loadStudents();
    this.props.loadCampuses();
  }

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <NavBar />
        <Students />
        <Campuses />
      </div>
    );
  }
}

// what do i want to access in this particular component
// const mapStateToProsp = (state) => {
//   const { students, campuses } = state;
//   return {
//     students,
//     campuses,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    loadStudents: () => dispatch(loadStudents()),
    loadCampuses: () => dispatch(loadCampuses()),
  };
};

const App = connect(null, mapDispatchToProps)(_App);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
