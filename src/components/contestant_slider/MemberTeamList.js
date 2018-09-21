import React from "react";
import PropTypes from "prop-types";

const MemberTeamList = props => {
  const memberList = props.members.map(member => {
    return (
      <li>
        <span>{member.handle}</span>
      </li>
    );
  });
  return (
    <React.Fragment>
      <ul>{memberList}</ul>
    </React.Fragment>
  );
};

MemberTeamList.propTypes = {
  members: PropTypes.array
};

export default MemberTeamList;
