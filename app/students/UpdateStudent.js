import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  loadSingleStudent,
  updateStudent,
} from '../store/thunks/studentThunks';

class UpdateStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.singleStudent.firstName
        ? this.props.singleStudent.firstName
        : '',
      lastName: this.props.singleStudent.lastName
        ? this.props.singleStudent.lastName
        : '',
      email: this.props.singleStudent.email
        ? this.props.singleStudent.email
        : '',
      gpa: this.props.singleStudent.gpa ? this.props.singleStudent.gpa : 0,
      campusId: this.props.singleStudent.campus
        ? this.props.singleStudent.campus.id
        : 0,
      campusId: this.props.singleStudent.campusId
        ? this.props.singleStudent.campusId
        : 0,
    };

    this.onChange = this.onChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidUpdate(prevState) {
    if (!prevState.firstName && this.props.singleStudent.firstName) {
      this.setState({
        firstName: this.props.singleStudent.firstName,
        lastName: this.props.singleStudent.lastName,
        email: this.props.singleStudent.email,
        gpa: this.props.singleStudent.gpa,
        campusId: this.props.singleStudent.campus,
      });
    }
  }

  componentDidMount() {
    const { id } = this.props.singleStudent;
    const idNum = this.props.match.params.id;
    if (!id) {
      this.props.load(idNum);
    }
  }

  onChange(ev) {
    const tempState = {};
    tempState[ev.target.name] = ev.target.value;
    this.setState(tempState);
  }

  handleSave(ev) {
    ev.preventDefault();
    this.props.update(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.gpa,
      this.props.match.params.id,
      this.state.campusId,
      this.props.history
    );
  }

  render() {
    const { firstName, lastName, email, gpa, campusId } = this.state;

    const { onChange, handleSave } = this;
    return (
      <div>
        <p>
          Change Settings for Student {firstName} {lastName}
        </p>
        <form onSubmit={handleSave}>
          <label>First Name: </label>
          <input name="firstName" value={firstName} onChange={onChange} />
          <br />

          <label>Last Name: </label>
          <input name="lastName" value={lastName} onChange={onChange} />
          <br />
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          <br />

          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    singleStudent: state.singleStudent,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    load: (id) => dispatch(loadSingleStudent(id)),
    update: (firstName, lastName, email, gpa, id, campusId, history) =>
      dispatch(
        updateStudent(firstName, lastName, email, gpa, campusId, id, history)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent);
