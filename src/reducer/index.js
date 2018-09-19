import { combineReducers } from "redux";
import { CHALLENGE_ACTIONS } from "../actions/challenge/constants";

const initialState = {
  data: []
};

const challengeReducer = (state = initialState, action) => {
  console.log("ON CHALLENGE REDUCER");
  switch (action.type) {
    case CHALLENGE_ACTIONS.REQUEST_CHALLENGE:
      console.log("Request challenge: " + action.status);
      return { ...state, data: [...state.data, action.status] };
    case CHALLENGE_ACTIONS.SUCCESS_CHALLENGE:
      console.log("Success challenge");
      //console.log(action.payload);
      return {
        ...state,
        data: [...state.data, action.payload],
        status: state.status
      };
    case CHALLENGE_ACTIONS.ERROR_CHALLENGE:
      console.log("Error challenge");
      return { ...state, data: [...state.data, action.status, action.message] };
    default:
      console.log("Default challenge state");
      return state;
  }
};

const rootReducer = combineReducers({
  challengeReducer
});

export default rootReducer;
