import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { Provider, connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Students from './Students';
import Campuses from './Campuses';
import Home from './Home';
import { loadStudents, loadCampuses } from './store/thunks';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import NewCampus from './NewCampus';
import NewStudent from './NewStudent';
import UpdateStudent from './UpdateStudent';
import UpdateCampus from './UpdateCampus';

class _App extends Component {
  componentDidMount() {
    this.props.loadStudents();
    this.props.loadCampuses();
  }

  render() {
    return (
      <div>
        <HashRouter>
          <NavBar />
          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/students" component={Students} />
          <Route
            path="/students/id/:id/updateStudent"
            component={UpdateStudent}
          />
          <Route
            path="/campuses/id/:id/updateCampus"
            component={UpdateCampus}
          />
          <Route exact path="/campuses/id/:id" component={SingleCampus} />
          <Route exact path="/students/id/:id" component={SingleStudent} />
          <Route path="/campuses/newCampus" component={NewCampus} />
          <Route path="/students/newStudent" component={NewStudent} />
          <Route exact path="/" component={Home} />
        </HashRouter>
      </div>
    );
  }
}

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
