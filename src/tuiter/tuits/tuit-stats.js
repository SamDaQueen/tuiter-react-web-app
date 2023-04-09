import {
  faComment,
  faHeart as farHeart,
  faThumbsDown,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpFromBracket,
  faHeart,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks.js";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  const toggleLike = () => {
    dispatch(
      updateTuitThunk({
        ...tuit,
        likes: tuit.likes + 1,
        liked: tuit.likes >= 0,
      })
    );
  };

  const toggleDislike = () => {
    dispatch(
      updateTuitThunk({
        ...tuit,
        dislikes: tuit.dislikes + 1,
        disliked: tuit.dislikes >= 0,
      })
    );
  };

  return (
    <div className="row text-muted">
      <div className="col-2 d-flex align-items-center">
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
      <div
        className="col-3 d-flex align-items-center"
        onClick={() => toggleDislike()}
      >
        {tuit.disliked ? (
          <FontAwesomeIcon icon={faThumbsDown} style={{ color: "blue" }} />
        ) : (
          <FontAwesomeIcon icon={faThumbsDown} />
        )}
        <p className="mb-0 ms-3">{tuit.dislikes}</p>
      </div>
      <div className="col-1">
        <FontAwesomeIcon icon={faArrowUpFromBracket} />
      </div>
    </div>
  );
};

export default TuitStats;
