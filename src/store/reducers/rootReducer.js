import authReducer from './authReducer';
import solutionReducer from './solutionReducer';
import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    solution: solutionReducer,
    firestore: firestoreReducer
});

export default rootReducer;