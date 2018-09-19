import React, { Component } from "react";
import { connect } from "react-redux";
import ChallengeSlider from "./challenge_slider/ChallengeSlider";
import { fetchChallenges } from "../actions/challenge/actions";

//import getChallenges from "../Axios/challengeRequest";
//import doRequest from "../Axios/request";
//import CHALLENGE_URL from "../Axios/constants";

const mapDispatchToProps = dispatch => {
  console.log("MapDispatchToProps");
  return {
    getChallenges: () => dispatch(fetchChallenges())
  };
};

const mapStateToProps = state => {
  console.log("MapStateToProps");
  //Why this is happening
  const { challengeReducer } = state;
  if (challengeReducer.data.length > 0) {
    const challenges = state.challengeReducer.data[0].slice(0, 20);
    return {
      challenges: challenges,
      status: challengeReducer.status
    };
  } else if (challengeReducer.status === "loading") {
    /**
     * Show an image of loading
     */
    return {
      status: challengeReducer.status
    };
  }
};

class AppConnected extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    console.log("Component will mount");
    /**
     * When the component mount is going to make a http request to the api.
     * This way we get all the initial data we will use.
     */
    this.props.getChallenges();
  }

  render() {
    return (
      <div className="container">
        <div className="title-container">
          <h1>Challenges</h1>
        </div>
        <div className="app-body">
          {this.props.status === "loading" ? (
            <div className="load-gif">
              <img src={require("../media/ajax-loader.gif")} alt="Loading" />
            </div>
          ) : (
            <ChallengeSlider challenges={this.props.challenges} />
          )}
        </div>
      </div>
    );
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppConnected);

export default App;
