import React from "react";
import SolutionSummary from "./SolutionSummary";

const SolutionList = () => {
  return (
    <div className="project-list section">
      <SolutionSummary />
      <SolutionSummary />
      <SolutionSummary />
    </div>
  );
}

export default SolutionList;