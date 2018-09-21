import React, { Component } from "react";
import { connect } from "react-redux";
import ChallengeSlider from "./challenge_slider/ChallengeSlider";
import ContestantSlider from "./contestant_slider/ContestantSlider";
import { fetchChallenges } from "../actions/challenge/actions";
import { fetchContestants } from "../actions/contestants/actions";

//import getChallenges from "../Axios/challengeRequest";
//import doRequest from "../Axios/request";
//import CHALLENGE_URL from "../Axios/constants";

const mapDispatchToProps = dispatch => {
  console.log("MapDispatchToProps");
  return {
    getChallenges: () => dispatch(fetchChallenges()),
    getContestants: challengeId => dispatch(fetchContestants(challengeId))
  };
};

const mergeChallengeResponse = challengeReducer => {
  if (challengeReducer.data.length > 0) {
    const challenges = challengeReducer.data[0].slice(0, 20);
    return {
      challenges: challenges,
      challenge_status: challengeReducer.status
    };
  } else if (challengeReducer.status === "loading") {
    return {
      challenge_status: challengeReducer.status
    };
  }
};

const mergeContestantResponse = contestantReducer => {
  if (contestantReducer.data.length > 0) {
    //console.log(contestantReducer.data["0"].rows);
    const contestants =
      contestantReducer.data["0"].rows.length >= 5
        ? contestantReducer.data["0"].rows.slice(0, 5)
        : contestantReducer.data["0"].rows;
    return {
      contestants: contestants,
      contestant_status: contestantReducer.status
    };
  } else if (contestantReducer.status === "loading") {
    console.log("Contestants loading");
    return {
      contestant_status: contestantReducer.status
    };
  }
};

const mapStateToProps = state => {
  console.log("MapStateToProps");
  const { challengeReducer, contestantReducer } = state;
  return {
    ...mergeChallengeResponse(challengeReducer),
    ...mergeContestantResponse(contestantReducer)
  };
};

class AppConnected extends Component {
  constructor() {
    super();

    this.handleChallengeClick = this.handleChallengeClick.bind(this);
  }

  componentWillMount() {
    console.log("Component will mount");
    /**
     * When the component mount is going to make a http request to the api.
     * This way we get all the initial data we will use.
     */
    this.props.getChallenges();
  }

  handleChallengeClick(challenge) {
    this.props.getContestants(challenge.key);
  }

  render() {
    return (
      <div className="container">
        <div className="title-container">
          <h1>Challenges</h1>
        </div>
        <div className="app-body">
          <div>
            {this.props.challenge_status === "loading" ? (
              <div className="load-gif">
                <img src={require("../media/ajax-loader.gif")} alt="Loading" />
              </div>
            ) : (
              <ChallengeSlider
                challenges={this.props.challenges}
                handleClick={this.handleChallengeClick}
              />
            )}
          </div>
          <div>
            {this.props.contestant_status === "loading" ? (
              <div className="load-gif">
                <img src={require("../media/ajax-loader.gif")} alt="Loading" />
              </div>
            ) : (
              <ContestantSlider contestants={this.props.contestants} />
            )}
          </div>
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
