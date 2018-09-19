import axios from "axios";
import { CONTESTANT_ACTIONS, contestantsUrl } from "./constants";

export function requestContestants() {
  console.log("REQUEST CHALLENGE");
  return {
    type: CONTESTANT_ACTIONS.REQUEST_CONTESTANT,
    status: "loading"
  };
}

export function receiveContestants(challenges) {
  console.log("SUCCESS CHALLENGE");
  return {
    type: CONTESTANT_ACTIONS.SUCCESS_CONTESTANT,
    status: "success",
    payload: challenges
  };
}

export function errorContestants() {
  console.log("ERROR CHALLENGE");
  return {
    type: CONTESTANT_ACTIONS.ERROR_CONTESTANT,
    status: "error",
    message: "Error loading challenges"
  };
}

const getContestants = contestId => {
  try {
    return axios.get(contestantsUrl(contestId));
  } catch (error) {
    console.error("Here: " + error);
  }
};

export function fetchChallenges(dispatch) {
  return dispatch => {
    dispatch(requestContestants());
    return getContestants()
      .then(response => {
        dispatch(receiveContestants(response.data["result"]));
      })
      .catch(error => {
        dispatch(errorContestants());
      });
  };
}
