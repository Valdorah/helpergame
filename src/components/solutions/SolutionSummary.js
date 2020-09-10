import React from 'react';

const SolutionSummary = ({ solution }) => {
  return (
    <div className="card z-depth-0 solution-summary smoke-effect">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{solution.title}</span>
        <p>Posted by ...</p>
        <p className="grey-text">9th September, 2pm</p>
      </div>
    </div>
  );
}

export default SolutionSummary;