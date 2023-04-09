import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import "../home/index.css";
import { deleteTuit } from "../reducers/tuits-reducer";
import TuitStats from "./tuit-stats";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  return (
    <div className="list-group-item wd-post">
      <div className="row p-2">
        <div className="col-md-1 col-sm-2">
          <img className="wd-avatar" src={tuit.avatar} />
        </div>
        <div className="col-md-11 col-sm-10 ps-4">
          <div className="row mb-3">
            <div className="float-start col-11">
              <span className="fw-bold text-dark">{tuit.userName}</span>
              <FontAwesomeIcon icon={faCircleCheck} className="ms-2 me-2" />
              <span className="text-muted">
                @{tuit.handle} • {tuit.time}
              </span>
              <br />
              <span className="text-secondary">{tuit.tuit}</span>{" "}
            </div>
            <div className="col-1">
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "#536471" }}
                onClick={() => dispatch(deleteTuit(tuit._id))}
              />
            </div>
          </div>

          <TuitStats tuit={tuit} />
        </div>
      </div>
    </div>
  );
};
export default TuitItem;
