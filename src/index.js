/**
 *Create an app that returns a list of contests (from 1 to 20)
 *When a contest is clicked, show the standings (the first five places)
 *Use redux to handle the state.
 */
//Contests' list: https://codeforces.com/api/contest.list?gym=true
//Contest's standings: https://codeforces.com/api/contest.standings?contestId=566&from=1&count=5&showUnofficial=false
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import App from "./components/App";
import "./styles.css";

/*import axios from "axios";

const getContests = () => {
  try {
    return axios.get("https://codeforces.com/api/contest.list?gym=true");
  } catch (error) {
    console.error(error);
  }
};

const printContests = async () => {
  const contests = getContests()
    .then(response => {
      if (response.data) {
        console.log("Data: " + response.data["result"].length);
        /*response.data["result"].map(current => {
          console.log(current.name);
          return 0;
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
};

printContests();*/

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    (<App />
  </Provider>,
  rootElement
);
