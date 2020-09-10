export const createSolution = (solution) => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_SOLUTION', solution });
  }
}