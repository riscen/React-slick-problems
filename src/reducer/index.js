import { combineReducers } from "redux";
import challengeReducer from "./challengeReducer";
import contestantReducer from "./contestantReducer";

const rootReducer = combineReducers({
  challengeReducer,
  contestantReducer
});

export default rootReducer;
