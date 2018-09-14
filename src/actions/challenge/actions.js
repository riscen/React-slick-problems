import CHALLENGE_ACTIONS from "./constants";

//export const requestChallenge = payload => ({type:})

export const request = data => ({
  type: CHALLENGE_ACTIONS.REQUEST_CHALLENGE,
  payload: data
});

export const success = data => ({
  type: CHALLENGE_ACTIONS.SUCCESS_CHALLENGE,
  payload: data
});

export const error = data => ({
  type: CHALLENGE_ACTIONS.ERROR_CHALLENGE,
  payload: data
});
