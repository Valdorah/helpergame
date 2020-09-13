import React from 'react';
import moment from 'moment';

const SolutionSummary = ({ solution }) => {
  return (
    <div className="card z-depth-0 solution-summary smoke-effect">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{solution.title}</span>
        <p>Posted by {solution.authorFirstName} {solution.authorLastName}</p>
        <p className="grey-text">{moment(solution.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
}

export default SolutionSummary;