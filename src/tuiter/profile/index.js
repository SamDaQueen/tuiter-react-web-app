import {
  faBirthdayCake,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

const ProfileComponent = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <>
      <div className="card text-white bg-light border-secondary rounded-1">
        <div className="card-header row mt-1">
          <h4 className="mb-0">{profile.name}</h4>
          <span className="text-muted">{profile.number_of_tuits} Tuits</span>
        </div>
        <div className="box">
          <img className="card-img" src={profile.banner}></img>
          <img className="overlay" src={profile.avatar} />
        </div>
        <div className="card-body row mt-2 pt-0">
          <div>
            <Link to={"../edit-profile"}>
              <h3
                type="button"
                className="btn btn-outline-dark col-3 float-end rounded-pill fw-bold"
              >
                Edit Profile
              </h3>
            </Link>
          </div>
          <div className="row mt-4 ms-1">
            <h4 className="mb-0">{profile.name}</h4>
            <span className="mb-3 text-muted">@{profile.handle}</span>
            <p className="mb-0">{profile.bio}</p>
            <a href={profile.website} className="text-muted mb-3">
              {profile.website}
            </a>
            <div className="row mb-2">
              <div className="col-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                <span className="text-muted">{profile.location}</span>
              </div>
              <div className="col-4">
                <FontAwesomeIcon icon={faBirthdayCake} className="me-2" />
                <span className="text-muted">Born {profile.birthdate}</span>
              </div>
              <div className="col-4">
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                <span className="text-muted">Joined {profile.joined}</span>
              </div>
            </div>
            <div className="text-muted">
              <span className="fw-bold">{profile.followingCount}</span>{" "}
              Following
              <span className="fw-bold float-left ms-4">
                {profile.followersCount}
              </span>{" "}
              Followers
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileComponent;
