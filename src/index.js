/**
 *Create an app that returns a list of contests
 *When a contest is clicked, show the standings
 *Use redux to handle the state.
 */
//Contests' list: https://codeforces.com/api/contest.list?gym=true
//Contest's standings: https://codeforces.com/api/contest.standings?contestId=566&from=1&count=5&showUnofficial=false
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

import App from "./components/App";
import Footer from "./components/Footer";
import "./styles.css";

const store = configureStore();

const withFooter = WrappedComponent => () => [
  <WrappedComponent key="1" />,
  <Footer key="2" />
];

const Wrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const WrapperWithFooter = withFooter(Wrapper);

const rootElement = document.getElementById("root");
ReactDOM.render(<WrapperWithFooter />, rootElement);
