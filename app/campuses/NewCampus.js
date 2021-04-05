import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCampus } from '../store/thunks/campusThunks';

class CreateCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      description: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  onChange(ev) {
    const tempState = {};
    tempState[ev.target.name] = ev.target.value;
    this.setState(tempState);
  }

  handleSave(ev) {
    ev.preventDefault();
    this.props.createCampus(
      this.state.name,
      this.state.address,
      this.state.description,
      this.props.history
    );
    this.setState({ name: '', address: '', description: '' });
  }

  render() {
    const { onChange, handleSave } = this;
    return (
      <div>
        <p>Create New Campus:</p>
        <form onSubmit={handleSave}>
          <label>Campus Name:</label>
          <input name="name" value={this.state.name} onChange={onChange} />

          <label>Campus Address: </label>
          <input
            name="address"
            value={this.state.address}
            onChange={onChange}
          />
          <label>Description: </label>
          <input
            name="description"
            value={this.state.description}
            onChange={onChange}
          />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createCampus: (name, address, description, history) =>
      dispatch(createCampus(name, address, description, history)),
  };
};

export default connect(null, mapDispatchToProps)(CreateCampus);
