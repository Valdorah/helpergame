import React from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const SolutionDetails = (props) => {
  const { solution } = props;
  const solutionDetails = solution ? (
    <div className="container">
      <div className="card z-depth-0 smoke-effect">
        <div className="card-content">
          <span className="card-title">{solution.title}</span>
          <p>{solution.content}</p>
        </div>
        <div className="card-action grey-text">
          <div>Posted by {solution.authorFirstName} {solution.authorLastName}</div>
          <div>9th September, 2pm</div>
        </div>
      </div>
    </div>
  )
    :
    (
      <div className="container center">
        <p>Laoding project...</p>
      </div>
    )

  return (
    solutionDetails
  );
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const solutions = state.firestore.data.solutions;
  const solution = solutions ? solutions[id] : null
  return {
    solution: solution
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'solutions' }
  ])
)(SolutionDetails);