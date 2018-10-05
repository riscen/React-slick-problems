import React from "react";
import PropTypes from "prop-types";

import MemberTeamList from "./MemberTeamList";

const ContestantSlide = props => {
  const contestant = props.contestant;
  const ghostClass = contestant.ghost ? "ghost" : "no-ghost";
  return (
    <div onClick={item => props.handleClick(contestant)}>
      <div
        key={contestant.key}
        className={
          props.activeCard && props.activeCard === contestant.key
            ? "contestant-slide " + ghostClass + " active"
            : "contestant-slide " + ghostClass
        }
      >
        <div className="contestant-title">
          <span className="contestant-rank">{contestant.key}</span>
          <span className="contestant-points">{contestant.points} pts</span>
        </div>
        <div className="contestant-members">
          <MemberTeamList members={contestant.members} />
        </div>
        {contestant.teamName ? (
          <div className="contestant-team">
            <span>{contestant.teamName}</span>
          </div>
        ) : (
          <div />
        )}
        <div className="member-container-footer center">
          <span>Penalty: </span>
          <span>{contestant.penalty}</span>
        </div>
      </div>
    </div>
  );
};

ContestantSlide.propTypes = {
  contestant: PropTypes.object,
  handleClick: PropTypes.func,
  activeCard: PropTypes.any
};

export default ContestantSlide;
