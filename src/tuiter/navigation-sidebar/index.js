import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faBell,
  faBookmark,
  faEllipsis,
  faHashtag,
  faHome,
  faList,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div className="list-group">
      <a className="list-group-item" href="#">
        <FontAwesomeIcon icon={faTwitter} className="me-2" />
        <span className="d-none d-xl-inline">Tuiter</span>
      </a>
      <a
        className={`list-group-item
                    ${active === "home" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faHome} className="me-2" />
        <span className="d-none d-xl-inline">Home</span>
      </a>
      <a
        className={`list-group-item
                    ${active === "explore" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faHashtag} className="me-2" />
        <span className="d-none d-xl-inline">Explore</span>
      </a>
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
      <a
        className={`list-group-item
                    ${active === "profile" ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faHome} className="me-2" />
        <span className="d-none d-xl-inline">Profile</span>
      </a>
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
