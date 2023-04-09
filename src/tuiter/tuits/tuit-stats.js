import {
  faComment,
  faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faHeart,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { updateLike } from "../reducers/tuits-reducer";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  const toggleLike = () => {
    dispatch(
      updateLike({
        ...tuit,
        liked: !tuit.liked,
        likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
      })
    );
  };

  return (
    <div className="row text-muted">
      <div className="col-3 d-flex align-items-center">
        <FontAwesomeIcon icon={faComment} />
        <p className="mb-0 ms-3">{tuit.replies}</p>
      </div>
      <div className="col-3 d-flex align-items-center">
        <FontAwesomeIcon icon={faRetweet} />
        <p className="mb-0 ms-3">{tuit.retuits}</p>
      </div>
      <div
        className="col-3 d-flex align-items-center"
        onClick={() => toggleLike()}
      >
        {tuit.liked ? (
          <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
        ) : (
          <FontAwesomeIcon icon={farHeart} />
        )}
        <p className="mb-0 ms-3">{tuit.likes}</p>
      </div>
      <div className="col-3">
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </div>
    </div>
  );
};

export default TuitStats;
