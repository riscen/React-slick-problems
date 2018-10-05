import axios from "axios";
import { CONTESTANT_ACTIONS, contestantsUrl } from "./constants";

export function requestContestants() {
  console.log("REQUEST CONTESTANT");
  return {
    type: CONTESTANT_ACTIONS.REQUEST_CONTESTANT,
    payload: {
      status: "loading"
    }
  };
}

export function receiveContestants(contestants) {
  console.log("SUCCESS CONTESTANT");
  return {
    type: CONTESTANT_ACTIONS.SUCCESS_CONTESTANT,
    payload: {
      status: "success",
      contestants: contestants
    }
  };
}

export function errorContestants() {
  console.log("ERROR CONTESTANT");
  return {
    type: CONTESTANT_ACTIONS.ERROR_CONTESTANT,
    payload: {
      status: "error",
      message: "Error loading contestants"
    }
  };
}

const getContestants = contestId => {
  try {
    console.log(contestantsUrl(contestId));
    return axios.get(contestantsUrl(contestId));
  } catch (error) {
    console.error(error);
  }
};

export function fetchContestants(contestId, dispatch) {
  return dispatch => {
    dispatch(requestContestants());
    return getContestants(contestId)
      .then(response => {
        dispatch(receiveContestants(response.data["result"]));
      })
      .catch(error => {
        console.error("fetch: " + error);
        dispatch(errorContestants());
      });
  };
}
