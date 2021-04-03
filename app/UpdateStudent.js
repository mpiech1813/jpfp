import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleStudent, updateStudent } from './store/thunks';

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
    // console.log(this.props.singleStudent);

    this.onChange = this.onChange.bind(this);
    // this.onChangeSelect = this.onChangeSelect.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidUpdate(prevState) {
    if (!prevState.firstName && this.props.singleStudent.firstName) {
      // console.log('failure component did update', this.props);
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
    // console.log(this.props);
    const { id } = this.props.singleStudent;
    const idNum = this.props.match.params.id;
    if (!id) {
      // console.log('success');
      this.props.load(idNum);
    }
  }

  onChange(ev) {
    const tempState = {};
    tempState[ev.target.name] = ev.target.value;
    this.setState(tempState);
  }

  //use for drop down menu (needs update)
  //   onChangeSelect(ev) {
  //     const tempState = {};
  //     tempState[ev.target.name] = parseInt(ev.target.value);
  //     this.setState(tempState);
  //   }
  handleSave(ev) {
    ev.preventDefault();
    // console.log(this.props);
    this.props.update(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.gpa,
      this.props.match.params.id,
      this.state.campusId,
      this.props.history
    );
    // this.props.history.goBack();
    // this.setState({ firstName: '', lastName: '', email: '', gpa: 0 });
  }

  render() {
    const { firstName, lastName, email, gpa, campusId } = this.state;
    // console.log('component rendered', this.props);

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

          {/* <label>GPA: </label>
          <select name="gpa" value={gpa} onChange={onChangeSelect}>
            <option defaultValue="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select> */}
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
    // update: (firstName, lastName, email, gpa, id, history) =>
    //   console.log(firstName, lastName, email, gpa, id, history),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent);
