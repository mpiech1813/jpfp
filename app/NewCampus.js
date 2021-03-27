import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCampus } from './store/thunks';

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
    // console.log(this.state);
    this.props.createCampus(
      this.state.name,
      this.state.address,
      this.state.description
    );
    this.setState({ name: '', address: '', description: '' });
  }

  // add createCampust to line const {} = this.props
  render() {
    const { onChange, handleSave } = this;
    return (
      <div>
        <p>Create New Campus:</p>
        <form onSubmit={handleSave}>
          <label>Campus Name:</label>
          <input
            name="name"
            value={this.state.name}
            // onChange={(ev) => this.setState({ name: ev.target.value })}
            onChange={onChange}
          />

          <label>Campus Address: </label>
          <input
            name="address"
            value={this.state.address}
            // onChange={(ev) => this.setState({ address: ev.target.value })}
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
    // createCampus: (name, address, description) =>
    //   console.log(name, address, description),
    createCampus: (name, address, description) =>
      dispatch(createCampus(name, address, description)),
  };
};

export default connect(null, mapDispatchToProps)(CreateCampus);
