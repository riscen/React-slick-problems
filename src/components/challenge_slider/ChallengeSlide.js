import React from "react";
import PropTypes from "prop-types";

const ChallengeSlide = props => {
  return (
    <div>
      <div
        key={props.index}
        className={"challenge-slide " + props.item.difficulty}
      >
        <div className="challenge-title">
          <h3>{props.item.challengeName}</h3>
        </div>
        <div className="challenge-footer">
          <div className="challenge-type">
            <span>{props.item.type}</span>
          </div>
          <div className="challenge-season">
            <span>{props.item.season}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ChallengeSlide.propTypes = {
  item: PropTypes.object
};

export default ChallengeSlide;
