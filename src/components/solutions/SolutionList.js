import React from "react";
import SolutionSummary from "./SolutionSummary";
import { Link } from "react-router-dom";

const SolutionList = ({ solutions }) => {
  const solutionList = solutions ?
    (solutions.map(solution => <Link to={`/solution/${solution.id}`} key={solution.id}><SolutionSummary solution={solution} /></Link>))
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