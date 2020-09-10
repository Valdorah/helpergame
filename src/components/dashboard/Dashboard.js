import React, { Component } from 'react';
import Notifications from "./Notifications";
import SolutionList from "../solutions/SolutionList";
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { solutions } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <SolutionList solutions={ solutions } />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    solutions: state.solution.solutions
  }
}

export default connect(mapStateToProps)(Dashboard);