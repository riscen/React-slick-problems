import CHALLENGE_ACTIONS from "../actions/challenge/constants";

const rootReducer = (state = [], action) => {
  switch (action.type) {
    case CHALLENGE_ACTIONS.REQUEST_CHALLENGE:
      return { ...state, data: [...state.data, action.payload] };
    case CHALLENGE_ACTIONS.SUCCESS_CHALLENGE:
      return { ...state, data: [...state.data, action.payload] };
    case CHALLENGE_ACTIONS.ERROR_CHALLENGE:
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
