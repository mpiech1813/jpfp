import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import NavBar from './NavBar';
import Students from './Students';

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      campuses: [],
    };
  }

  async componentDidMount() {
    try {
      const studentList = (await axios.get('/api/students')).data;
      const campuseList = (await axios.get('/api/campuses')).data;
      this.setState({ students: studentList, campuses: campuseList });
    } catch (error) {
      console.log(`error occured in component did mount, client.js` + error);
      noExtendLeft(error);
    }
  }

  render() {
    const { students, campuses } = this.state;
    return (
      <div>
        <NavBar />
        <Students students={students} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
