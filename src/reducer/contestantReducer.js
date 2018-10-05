import { initialState } from "./initialState";
import { CONTESTANT_ACTIONS } from "../actions/contestants/constants";

const contestantReducer = (state = initialState, action) => {
  console.log("ON CONTESTANT REDUCER");
  switch (action.type) {
    case CONTESTANT_ACTIONS.REQUEST_CONTESTANT:
      console.log("Request contestant");
      return {
        ...state,
        status: action.payload.status
      };
    case CONTESTANT_ACTIONS.SUCCESS_CONTESTANT:
      console.log("Success contestant");
      return {
        ...state,
        contestants: action.payload.contestants,
        status: action.payload.status
      };
    case CONTESTANT_ACTIONS.ERROR_CONTESTANT:
      console.log("Error contestant");
      return {
        ...state,
        contestants: action.payload.contestants,
        status: action.payload.status
      };
    default:
      console.log("Default challenge state");
      return state;
  }
};

export default contestantReducer;
