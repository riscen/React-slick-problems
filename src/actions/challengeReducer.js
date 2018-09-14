import {
  CHALLENGE_REQUEST,
  CHALLENGE_SUCCESS,
  CHALLENGE_ERROR,
  CHALLENGE_URL
} from "../constants/challengeActions";

const challengeRootReducer = (state = [], action) => {
  switch (action.type) {
    case CHALLENGE_REQUEST:
      doChallengeRequest();
      break;
    case CHALLENGE_SUCCESS:
      break;
    case CHALLENGE_ERROR:
      break;
  }
};

const doChallengeRequest = () => {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = () => {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
    }
  };
  xhttp.open("GET", CHALLENGE_ERROR);
  xhttp.send();
};

export default challengeRootReducer;
