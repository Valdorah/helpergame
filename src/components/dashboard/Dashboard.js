import React, { Component } from 'react';
import Notifications from "./Notifications";
import SolutionList from "../solutions/SolutionList";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    const { solutions, auth, notifications } = this.props;
    
    if(!auth.uid) {
      return <Redirect to="/signin" />
    }

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <SolutionList solutions={solutions} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    solutions: state.firestore.ordered.solutions,
    notifications: state.firestore.ordered.notifications,
    auth: state.firebase.auth
  }
}

export default compose(
  firestoreConnect([
    {collection: 'solutions', orderBy: ['createdAt', 'desc']},
    {collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ]),
  connect(mapStateToProps)
)(Dashboard);