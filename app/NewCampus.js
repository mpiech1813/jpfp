import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCampus } from './store/thunks';

class CreateCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
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
    this.props.createCampus(this.state.name, this.state.address);
    this.setState({ name: '', address: '' });
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
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    // createCampus: (name, address) => console.log(name, address),
    createCampus: (name, address) => dispatch(createCampus(name, address)),
  };
};

export default connect(null, mapDispatchToProps)(CreateCampus);
