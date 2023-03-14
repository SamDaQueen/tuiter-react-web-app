import React from "react";
import "./index.css";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const PostSummaryItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "../tuiter/images/tesla.png",
  },
}) => {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter((p) => p !== "");
  const active = paths[paths.length - 1];
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div>
            {post.userName}{" "}
            <FontAwesomeIcon icon={faCircleCheck} className="ms-2" /> {" - "}
            {post.time}
          </div>
          <div className="fw-bolder">{post.topic}</div>
          <div>{post.title}</div>
        </div>
        <div className="col-2">
          <img
            className={`float-end rounded-3 wd-post-image ${
              active === "home" ? "wd-post-image-small" : "wd-post-image-big"
            }`}
            src={`/images/${post.image}`}
          />
        </div>
      </div>
    </li>
  );
};
export default PostSummaryItem;
