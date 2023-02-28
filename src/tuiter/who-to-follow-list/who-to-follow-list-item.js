import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const WhoToFollowListItem = ({
  who = {
    userName: "NASA",
    handle: "NASA",
    avatarIcon: "../tuiter/images/nasa.png",
  },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            className="rounded-circle"
            height={48}
            width={48}
            src={`/images/${who.avatarIcon}`}
          />
        </div>
        <div className="col-8 ps-3">
          <div className="fw-bold">
            {who.userName}
            <FontAwesomeIcon icon={faCircleCheck} className="ms-2" />
          </div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-2">
          <button className="btn btn-primary rounded-pill float-end">
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
