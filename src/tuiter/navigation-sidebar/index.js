import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faBookmark,
  faEllipsis,
  faFlask,
  faHashtag,
  faHome,
  faList,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/").filter((p) => p !== "");
  const active = paths[paths.length - 1];

  return (
    <div className="list-group">
      <Link to={"/tuiter/home"} className={"list-group-item"}>
        <FontAwesomeIcon icon={faTwitter} className="me-2" />
        <span className="d-none d-xl-inline">Tuiter</span>
      </Link>
      <Link
        to={"/tuiter/home"}
        className={`list-group-item ${
          active === "home" || active === "tuiter" ? "active" : ""
        }`}
      >
        <FontAwesomeIcon icon={faHome} className="me-2" />
        <span className="d-none d-xl-inline">Home</span>
      </Link>
      <Link
        to={"/tuiter/explore"}
        className={`list-group-item ${active === "explore" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faHashtag} className="me-2" />
        <span className="d-none d-xl-inline">Explore</span>
      </Link>
      <Link to="/" className="list-group-item">
        <FontAwesomeIcon icon={faFlask} className="me-2" />
        <span className="d-none d-xl-inline">Labs</span>
      </Link>

      <a
        className={`list-group-item
                    ${active === "notifications" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faBell} className="me-2" />
        <span className="d-none d-xl-inline">Notifications</span>
      </a>
      <a
        className={`list-group-item
                    ${active === "messages" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faMessage} className="me-2" />
        <span className="d-none d-xl-inline">Messages</span>
      </a>
      <a
        className={`list-group-item
                    ${active === "bookmarks" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faBookmark} className="me-2" />
        <span className="d-none d-xl-inline">Bookmarks</span>
      </a>
      <a
        className={`list-group-item
                    ${active === "lists" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faList} className="me-2" />
        <span className="d-none d-xl-inline">Lists</span>
      </a>
      <Link
        to={"/tuiter/profile"}
        className={`list-group-item ${active === "profile" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faHome} className="me-2" />
        <span className="d-none d-xl-inline">Profile</span>
      </Link>
      <a
        className={`list-group-item
                    ${active === "more" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faEllipsis} className="me-2" />
        <span className="d-none d-xl-inline">More</span>
      </a>
    </div>
  );
};
export default NavigationSidebar;
