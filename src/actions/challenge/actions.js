import axios from "axios";
import { CHALLENGE_ACTIONS, CHALLENGE_URL } from "./constants";

export function requestChallenges() {
  console.log("REQUEST CHALLENGE");
  return {
    type: CHALLENGE_ACTIONS.REQUEST_CHALLENGE,
    payload: {
      status: "loading"
    }
  };
}

export function receiveChallenges(challenges) {
  console.log("SUCCESS CHALLENGE");
  return {
    type: CHALLENGE_ACTIONS.SUCCESS_CHALLENGE,
    payload: {
      challenges: challenges,
      status: "success"
    }
  };
}

export function errorChallenges() {
  console.log("ERROR CHALLENGE");
  return {
    type: CHALLENGE_ACTIONS.ERROR_CHALLENGE,
    payload: {
      status: "error",
      message: "Error loading challenges"
    }
  };
}

const getChallenges = () => {
  try {
    return axios.get(CHALLENGE_URL);
  } catch (error) {
    console.error(error);
  }
};

export function fetchChallenges(dispatch) {
  return dispatch => {
    dispatch(requestChallenges());
    return getChallenges()
      .then(response => {
        dispatch(receiveChallenges(response.data["result"]));
      })
      .catch(error => {
        dispatch(errorChallenges());
      });
  };
}
