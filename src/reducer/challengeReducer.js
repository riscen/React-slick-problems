import { initialState } from "./initialState";
import { CHALLENGE_ACTIONS } from "../actions/challenge/constants";

const challengeReducer = (state = initialState, action) => {
  console.log("ON CHALLENGE REDUCER");
  switch (action.type) {
    case CHALLENGE_ACTIONS.REQUEST_CHALLENGE:
      console.log("Request challenge");
      return {
        ...state,
        status: action.status
      };
    case CHALLENGE_ACTIONS.SUCCESS_CHALLENGE:
      console.log("Success challenge");
      return {
        ...state,
        data: [...state.data, action.payload],
        status: action.status
      };
    case CHALLENGE_ACTIONS.ERROR_CHALLENGE:
      console.log("Error challenge");
      return {
        ...state,
        status: action.status,
        message: action.message
      };
    default:
      console.log("Default challenge state");
      return state;
  }
};

export default challengeReducer;
