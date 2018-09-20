import React, { Component } from "react";
import PropType from "prop-types";
import Slider from "react-slick";
import ChallengeSlide from "./ChallengeSlide";

import "slick-carousel/slick/slick.css";

class ChallengeSlider extends Component {
  constructor() {
    super();
    this.state = {
      activeCard: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(challenge) {
    this.setState({
      activeCard: challenge.key
    });
    this.props.handleClick(challenge);
  }

  render() {
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      repsonsive: [
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
          }
        }
      ]
    };
    const challenges = this.props.challenges;
    let sliders = [];
    if (challenges) {
      sliders = challenges.map((current, index) => {
        const challengeData = {
          key: current["id"],
          challengeName: current["name"],
          difficulty: "dif-" + current["difficulty"],
          type: current["kind"],
          description: current["description"],
          season: current["season"]
        };
        return (
          <ChallengeSlide
            challenge={challengeData}
            handleClick={this.handleClick}
            activeCard={this.state.activeCard}
          />
        );
      });
    }
    return (
      <div className="challenge-slider">
        <Slider {...settings}>{sliders}</Slider>
      </div>
    );
  }
}

ChallengeSlider.propTypes = {
  challenges: PropType.array,
  handleClick: PropType.func
};

export default ChallengeSlider;
