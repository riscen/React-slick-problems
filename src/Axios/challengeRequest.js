import axios from "axios";
import CHALLENGE_URL from "../actions/challenge/constants";
import { request, success, error } from "../actions/challenge/actions";

class CodeSignalApi {
  static getChallenges() {
    console.log("Challenge request");
    request({ loading: true });
    axios
      .get(CHALLENGE_URL)
      .then(response => {
        success({ loading: false, challenges: response["result"] });
        console.log(response["result"]);
      })
      .catch(error => {
        error({ loading: false });
      });
  }
}

const getChallenges = () => {
  console.log("Challenge request");
  request({ loading: true });
  axios
    .get(CHALLENGE_URL)
    .then(response => {
      success({ loading: false, challenges: response["result"] });
      console.log(response["result"]);
    })
    .catch(error => {
      error({ loading: false });
    });
};

export default getChallenges;

/*const request = async url => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

const doRequest = async url => {
  console.log("Request: " + url);
  const data = await request(url)
    .then(response => {
      if (response.data) {
        console.log("Success");
        return response.data;
      }
    })
    .catch(error => {
      console.log(error);
    });
  //console.log(data);
  return data;
};

export const contetstantsUrl = contestId => {
  return (
    "http://codeforces.com/api/contest.standings?contestId=" +
    contestId +
    "&from=1&count=10&showUnofficial=true"
  );
};

export default doRequest;*/
