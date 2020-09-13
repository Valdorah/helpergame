export const createSolution = (solution) => {
  return (dispatch, getState, { getFirbase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore.collection('solutions').add({
      ...solution,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_SOLUTION', solution });
    }).catch((err) => {
      dispatch({ type: 'CREATE_SOLUTION_ERROR', err });
    })
  }
}