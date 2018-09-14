import React, { Component } from "react";
import ChallengeSlider from "./challenge_slider/ChallengeSlider";
//import doRequest from "../Axios/request";
//import CHALLENGE_URL from "../Axios/constants";

class App extends Component {
  constructor() {
    super();
    this.state = {
      challenges: []
    };
  }

  async componentWillMount() {
    const challenges = [
      {
        id: 100001,
        name: "2010 Codeforces Beta Round #1 (training)",
        type: "ICPC",
        phase: "FINISHED",
        frozen: false,
        durationSeconds: 7200,
        description:
          "This is the only contest for testing Codeforces::Gym. As you participate in any other training, you guarantee that you solve problems without assistance and that you do not send other people\u0027s solutions.",
        difficulty: 3,
        kind: "Training Contest",
        season: "2010-2011"
      },
      {
        id: 100002,
        name:
          "2002-2003 ACM-ICPC Northeastern European Regional Contest (NEERC 02)",
        type: "ICPC",
        phase: "FINISHED",
        frozen: false,
        durationSeconds: 18000,
        preparedBy: "MikeMirzayanov",
        difficulty: 4,
        kind: "Official ACM-ICPC Contest",
        icpcRegion: "Northeastern Europe Region",
        country: "Russia",
        city: "Saint Petersburg",
        season: "2002-2003"
      },
      {
        id: 100003,
        name:
          "2008-2009 Всероссийская командная олимпиада школьников по программированию (ВКОШП 08)",
        type: "ICPC",
        phase: "FINISHED",
        frozen: false,
        durationSeconds: 18000,
        startTimeSeconds: 1453514400,
        relativeTimeSeconds: 83249052,
        preparedBy: "Edvard",
        difficulty: 3,
        kind: "Official School Contest",
        country: "Russia",
        city: "Saint Petersburg",
        season: "2008-2009"
      },
      {
        id: 100004,
        name: "Local Contest",
        type: "ICPC",
        phase: "FINISHED",
        frozen: false,
        durationSeconds: 10800,
        startTimeSeconds: 1511928000,
        relativeTimeSeconds: 24835452,
        preparedBy: "MikeMirzayanov",
        difficulty: 3,
        kind: "Official School Contest",
        country: "Uzbekistan",
        city: "Namangan",
        season: "2017-2018"
      },
      {
        id: 100005,
        name:
          "2010-2011 Цикл интернет-олимпиад. Вторая командная олимпиада (9 октября 2010). Усложненный уровень.",
        type: "ICPC",
        phase: "FINISHED",
        frozen: false,
        durationSeconds: 18000,
        preparedBy: "PavelKunyavskiy",
        difficulty: 3,
        kind: "Training Contest",
        country: "Russia",
        season: "2010-2011"
      },
      {
        id: 100006,
        name:
          "2005-2006 Цикл интернет-олимпиад. Вторая командная олимпиада (12 ноября 2005). Усложненный уровень.",
        type: "ICPC",
        phase: "FINISHED",
        frozen: false,
        durationSeconds: 18000,
        preparedBy: "yeputons",
        difficulty: 3,
        kind: "Training Contest",
        country: "Russia",
        season: "2005-2006"
      },
      {
        id: 100016,
        name:
          "2010-2011 Petrozavodsk Winter Training Camp, Saratov State U Contest",
        type: "ICPC",
        phase: "FINISHED",
        frozen: false,
        durationSeconds: 18000,
        preparedBy: "MikeMirzayanov",
        difficulty: 5,
        kind: "Training Camp Contest",
        country: "Russia",
        city: "Saratov",
        season: "2010-2011"
      },
      {
        id: 100017,
        name: "2011-2012 Third winter olympiad, Vologda, 31 January 2011",
        type: "ICPC",
        phase: "FINISHED",
        frozen: false,
        durationSeconds: 10800,
        startTimeSeconds: 1328007600,
        relativeTimeSeconds: 208755852,
        preparedBy: "freopen",
        difficulty: 3,
        kind: "School/University/City/Region Championship",
        country: "Russia",
        city: "Vologda",
        season: "2011-2012"
      }
    ];
    //Do the challenge request
    /*console.log("url: " + CHALLENGE_URL);
    const challenges = await doRequest(CHALLENGE_URL)["result"];
    if (challenges) {
      console.log(challenges);
    }
    console.log("Finish");*/
    console.log("Component will mount");
    const data = challenges.slice(0, 5);
    this.setState(
      {
        challenges: challenges.slice(0, 5)
      },
      () => console.log(this.state.challenges)
    );
  }

  render() {
    return (
      <div className="container">
        <div className="title-container">
          <h1>Challenges</h1>
        </div>
        <div className="app-body">
          <ChallengeSlider challenges={this.state.challenges} />
        </div>
      </div>
    );
  }
}

export default App;
