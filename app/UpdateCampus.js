import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleCampus, updateCampus } from './store/thunks';

class UpdateCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.singleCampus.name ? this.props.singleCampus.name : '',
      address: this.props.singleCampus.address
        ? this.props.singleCampus.address
        : '',
      description: this.props.singleCampus.description
        ? this.props.singleCampus.description
        : '',
    };
    // console.log(this.props);
    this.onChange = this.onChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  componentDidUpdate(prevState) {
    if (!prevState.name && this.props.singleCampus.name) {
      this.setState({
        name: this.props.singleCampus.name,
        address: this.props.singleCampus.address,
        description: this.props.singleCampus.description,
      });
    }
  }

  componentDidMount() {
    const { id } = this.props.singleCampus;
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

const mapStateToProps = (state) => {
  return {
    singleCampus: state.singleCampus,
  };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    load: (id) => dispatch(loadSingleCampus(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCampus);
