import authReducer from './authReducer';
import solutionReducer from './solutionReducer';
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    solution: solutionReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;