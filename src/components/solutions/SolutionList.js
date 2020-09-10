import React from "react";
import SolutionSummary from "./SolutionSummary";

const SolutionList = ({ solutions }) => {
  const solutionList = solutions ?
    (solutions.map(solution => <SolutionSummary key={solution.id} solution={solution} />))
    :
    (
      <div>
        <span>Loading...</span>
      </div>
    );

  return (
    <div className="project-list section">
      {solutionList}
    </div>
  );
}

export default SolutionList;