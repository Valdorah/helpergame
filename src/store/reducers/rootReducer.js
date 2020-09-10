import authReducer from './authReducer';
import solutionReducer from './solutionReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    solution: solutionReducer
});

export default rootReducer;