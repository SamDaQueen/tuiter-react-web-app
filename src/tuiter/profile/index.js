import {
  faArrowLeft,
  faBirthdayCake,
  faCalendarAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

const ProfileComponent = () => {
  return (
    <>
      <h2>Profile</h2>
      <div className="card text-white bg-light border-secondary rounded-0">
        <div className="card-header row d-flex align-items-center p-1">
          <FontAwesomeIcon icon={faArrowLeft} className="col-1" />
          <div className="col-10">
            <h4 className="mb-0">Obi-Wan Kenobi</h4>
            <span className="text-muted">6,392 Tuits</span>
          </div>
        </div>
        <div className="box">
          <img className="card-img" src="../images/kenobi-poster.jpg"></img>
          <img className="overlay" src="../images/kenobi.jpg" />
        </div>
        <div className="card-body row mt-2 pt-0">
          <div>
            <h3
              type="button"
              className="btn btn-outline-dark col-3 float-end rounded-pill fw-bold"
            >
              Edit Profile
            </h3>
          </div>
          <div className="row mt-4 ms-1">
            <h4 className="mb-0">Obi-Wan Kenobi</h4>
            <span className="mb-3 text-muted">@obiwan</span>
            <p>
              Wise and skilled Jedi Master, known for his bravery and dedication
              to the Jedi Order.
            </p>
            <div className="row mb-2">
              <div className="col-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                <span className="text-muted">Stewjon</span>
              </div>
              <div className="col-4">
                <FontAwesomeIcon icon={faBirthdayCake} className="me-2" />
                <span className="text-muted">Born 57 BBY</span>
              </div>
              <div className="col-4">
                <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
                <span className="text-muted">Joined April 2021</span>
              </div>
            </div>
            <div className="text-muted">
              <span className="fw-bold">1,000</span> Following
              <span className="fw-bold float-left ms-4">1,000</span> Followers
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProfileComponent;
