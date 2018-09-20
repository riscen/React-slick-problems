import axios from "axios";
import { CONTESTANT_ACTIONS, contestantsUrl } from "./constants";

export function requestContestants() {
  console.log("REQUEST CONTESTANT");
  return {
    type: CONTESTANT_ACTIONS.REQUEST_CONTESTANT,
    status: "loading"
  };
}

export function receiveContestants(contestants) {
  console.log("SUCCESS CONTESTANT");
  return {
    type: CONTESTANT_ACTIONS.SUCCESS_CONTESTANT,
    status: "success",
    payload: contestants
  };
}

export function errorContestants() {
  console.log("ERROR CONTESTANT");
  return {
    type: CONTESTANT_ACTIONS.ERROR_CONTESTANT,
    status: "error",
    message: "Error loading contestants"
  };
}

const getContestants = contestId => {
  try {
    console.log(contestantsUrl(contestId));
    return axios.get(contestantsUrl(contestId));
  } catch (error) {
    console.error("Here: " + error);
  }
};

export function fetchContestants(contestId, dispatch) {
  return dispatch => {
    dispatch(requestContestants());
    return getContestants(contestId)
      .then(response => {
        console.log(response);
        //dispatch(receiveContestants(response.data["result"]));
      })
      .catch(error => {
        console.error("fetch: " + error.status);
        dispatch(errorContestants());
      });
  };
}
