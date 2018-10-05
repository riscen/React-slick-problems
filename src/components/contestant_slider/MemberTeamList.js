import React from "react";
import PropTypes from "prop-types";

const MemberTeamList = props => {
  let members;
  if (props.members.length > 1) {
    members = (
      <ul className="member-list">
        {props.members.map((member, index) => {
          return (
            <li key={index}>
              <span className="member-item-list member-name">
                {member.handle}
              </span>
            </li>
          );
        })}
      </ul>
    );
  } else if (props.members.length === 1) {
    members = <span className="member-name">{props.members[0].handle}</span>;
  }

  return (
    <div className="member-container center">
      <div className="member-container-title">Usernames</div>
      {members}
    </div>
  );
};

MemberTeamList.propTypes = {
  members: PropTypes.array
};

export default MemberTeamList;
