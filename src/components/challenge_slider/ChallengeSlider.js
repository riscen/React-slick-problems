import React from "react";
import PropType from "prop-types";
import Slider from "react-slick";
import ChallengeSlide from "./ChallengeSlide";

import "slick-carousel/slick/slick.css";

const ChallengeSlider = props => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    repsonsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: true
        }
      }
    ]
  };
  const challenges = props.challenges;
  let sliders = [];
  if (challenges) {
    sliders = props.challenges.map((current, index) => {
      const itemData = {
        key: current["id"],
        challengeName: current["name"],
        difficulty: "dif-" + current["difficulty"],
        type: current["kind"],
        description: current["description"],
        season: current["season"]
      };
      //console.log(itemData);
      return <ChallengeSlide item={itemData} />;
    });
  }
  return (
    <div className="challenge-slider">
      <Slider {...settings}>{sliders}</Slider>
    </div>
  );
};

ChallengeSlider.propTypes = {
  challenges: PropType.array
};

export default ChallengeSlider;
