import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStudent } from './store/thunks';

class CreateStudent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  onChange(ev) {
    const tempState = {};
    tempState[ev.target.name] = ev.target.value;
    this.setState(tempState);
  }

  onChangeSelect(ev) {
    const tempState = {};
    tempState[ev.target.name] = parseInt(ev.target.value);
    this.setState(tempState);
  }
  handleSave(ev) {
    ev.preventDefault();
    this.props.createStudent(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.gpa,
      this.props.history
    );
    this.props.history.goBack();
    this.setState({ firstName: '', lastName: '', email: '', gpa: 0 });
  }

  render() {
    const { firstName, lastName, email, gpa } = this.state;

    const { onChangeSelect, onChange, handleSave } = this;
    return (
      <div>
        <p>Register a New Student</p>
        <form onSubmit={handleSave}>
          <label>First Name: </label>
          <input name="firstName" value={firstName} onChange={onChange} />

          <label>Last Name: </label>
          <input name="lastName" value={lastName} onChange={onChange} />

          <label>Email: </label>
          <input name="email" value={email} onChange={onChange} />

          <label>GPA: </label>
          <select name="gpa" value={gpa} onChange={onChangeSelect}>
            <option defaultValue="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    // createStudent: (firstName, lastName, email, gpa) =>
    //   console.log(firstName, lastName, email, gpa),
    createStudent: (firstName, lastName, email, gpa, history) =>
      dispatch(createStudent(firstName, lastName, email, gpa, history)),
  };
};

export default connect(null, mapDispatchToProps)(CreateStudent);
