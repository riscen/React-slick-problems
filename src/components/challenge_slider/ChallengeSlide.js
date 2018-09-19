import React from "react";
import PropTypes from "prop-types";

const ChallengeSlide = props => {
  const challenge = props.challenge;
  return (
    <div onClick={item => props.handleClick(challenge)}>
      <div
        key={challenge.key}
        className={
          props.activeCard && props.activeCard === challenge.key
            ? "challenge-slide " + challenge.difficulty + " active"
            : "challenge-slide " + challenge.difficulty
        }
      >
        <div className="challenge-title">
          <h3>{challenge.challengeName}</h3>
        </div>
        <div className="challenge-footer">
          <div className="challenge-type">
            <span>{challenge.type}</span>
          </div>
          <div className="challenge-season">
            <span>{challenge.season}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ChallengeSlide.propTypes = {
  challenge: PropTypes.object,
  handleClick: PropTypes.func,
  activeCard: PropTypes.any
};

export default ChallengeSlide;
