import React, { Component } from "react";
import PropType from "prop-types";
import Slider from "react-slick";
import ContestantSlide from "./ContestantSlide";

import "slick-carousel/slick/slick.css";

class ContestantSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(contestant) {
    this.setState({
      activeCard: contestant.key
    });
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
    const contestants = this.props.contestants;
    let sliders = [];
    if (contestants) {
      sliders = contestants.map((current, index) => {
        const contestantData = {
          key: current.rank,
          teamName: current.party.teamName,
          ghost: current.party.ghost,
          members: current.party.members,
          points: current.points,
          penalty: current.penalty
        };
        return (
          <ContestantSlide
            key={contestantData.key}
            contestant={contestantData}
            handleClick={this.handleClick}
            activeCard={this.state.activeCard}
          />
        );
      });
    }
    return (
      <div className="contestant-slider">
        <Slider {...settings}>{sliders}</Slider>
      </div>
    );
  }
}

ContestantSlider.propTypes = {
  contestants: PropType.array
};

export default ContestantSlider;
