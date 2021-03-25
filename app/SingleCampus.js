import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadSingleCampus } from './store/thunks';

class SingleCampus extends Component {
  componentDidMount() {
    const idNum = this.props.match.params.id;
    this.props.loadSingleCampus(idNum);
  }
  render() {
    const { singleCampus } = this.props;
    const { students } = singleCampus;
    console.log(students);

    return (
      <div>
        <img src={singleCampus.imageUrl} />
        <div>
          <p>
            <u>Campus Name</u>: {singleCampus.name}
          </p>
          <p>
            <u>Campus Address</u>: {singleCampus.address}
          </p>
          <p>
            <u>Campus Description</u>: {singleCampus.description}
          </p>
          {/* {students.length === 0 ? <p>loading...</p> : <p>failed</p>} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    singleCampus: state.singleCampus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadSingleCampus: (id) => dispatch(loadSingleCampus(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
