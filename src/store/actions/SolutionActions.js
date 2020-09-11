export const createSolution = (solution) => {
  return (dispatch, getState, { getFirbase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore.collection('solutions').add({
      ...solution,
      authorFirstName: 'Valdorah',
      authorLastName: 'Givrevent',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_SOLUTION', solution });
    }).catch((err) => {
      dispatch({ type: 'CREATE_SOLUTION_ERROR', err });
    })
  }
}