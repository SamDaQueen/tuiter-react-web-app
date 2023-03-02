import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faCircleCheck,
  faEllipsis,
  faHeart,
  faLink,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import {
  faComment,
  faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";

const PostItem = ({ post }) => {
  return (
    <div className="list-group-item wd-post">
      <div className="row p-2">
        <div className="col-md-1 col-sm-2">
          <img className="wd-avatar" src={post.avatar} />
        </div>
        <div className="col-md-11 col-sm-10 ps-4">
          <div className="row">
            <div className="float-start col-11">
              <span className="fw-bold text-dark">{post.userName}</span>
              <FontAwesomeIcon icon={faCircleCheck} className="ms-2 me-2" />
              <span className="text-muted">
                @{post.handle} • {post.time}
              </span>
              <br />
              <span className="text-secondary">{post.post_title}</span>{" "}
              <a
                href={post.post_link}
                className="text-primary text-decoration-none"
              >
                {post.post_link_title}
              </a>
            </div>
            <div className="col-1">
              <FontAwesomeIcon icon={faEllipsis} style={{ color: "#536471" }} />
            </div>
          </div>
          {!post.image &&
          !post.card_title &&
          !post.card_text &&
          !post.caption_link ? (
            ""
          ) : (
            <div className="card rounded-3 border-muted m-2 ms-0">
              {post.image ? (
                <img
                  className={`card-img-top ${
                    post.card_title || post.card_text || post.caption_link
                      ? "rounded-top"
                      : "rounded"
                  }`}
                  src={post.image}
                />
              ) : (
                ""
              )}

              {!post.card_title && !post.card_text && !post.caption_link ? (
                ""
              ) : (
                <div className="card-body">
                  {post.card_title ? (
                    <h6 className="card-title">{post.card_title}</h6>
                  ) : (
                    ""
                  )}
                  {post.card_title ? (
                    <p className="card-text text-muted mb-0">
                      {post.card_text}
                    </p>
                  ) : (
                    ""
                  )}
                  {post.caption_link ? (
                    <a
                      href={`https://www.${post.caption_link}`}
                      className="card-link text-muted text-decoration-none"
                    >
                      <FontAwesomeIcon icon={faLink} />
                      {post.caption_link}
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              )}
            </div>
          )}

          <div className="row text-muted">
            <div className="col-3 d-flex align-items-center">
              <FontAwesomeIcon icon={faComment} />
              <p className="mb-0 ms-3">{post.comments}</p>
            </div>
            <div className="col-3 d-flex align-items-center">
              <FontAwesomeIcon icon={faRetweet} />
              <p className="mb-0 ms-3">{post.tuits}</p>
            </div>
            <div className="col-3 d-flex align-items-center">
              {post.liked ? (
                <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
              ) : (
                <FontAwesomeIcon icon={farHeart} />
              )}
              <p className="mb-0 ms-3">{post.likes}</p>
            </div>
            <div className="col-3">
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostItem;
