import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { editProfile } from "../reducers/profile-reducer";

const EditProfileComponent = () => {
  const profile = useSelector((state) => state.profile);

  const [name, setName] = React.useState(profile.name);
  const [bio, setBio] = React.useState(profile.bio);
  const [website, setWebsite] = React.useState(profile.website);
  const [location, setLocation] = React.useState(profile.location);
  const [birthdate, setBirthdate] = React.useState(profile.birthdate);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveHandler = () => {
    const updatedProfile = {
      name,
      bio,
      website,
      location,
      birthdate,
    };
    dispatch(editProfile(updatedProfile));
    navigate("../profile");
  };

  return (
    <>
      <div className="card text-white bg-light border-secondary rounded-1 mb-4">
        <div className="card-header row mt-2 me-3 d-flex align-items-center">
          <div className="col-1">
            <Link to={"../profile"}>
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "#536471", fontSize: "1.5rem" }}
              />
            </Link>
          </div>
          <h5 className="col-9 mb-0 fw-bold">Edit Profile</h5>
          <button
            className="col-2 btn btn-dark rounded-pill float-end"
            onClick={saveHandler}
          >
            Save
          </button>
        </div>
        <div className="box mb-4">
          <img className="card-img" src={profile.banner}></img>
          <img className="overlay" src={profile.avatar} />
        </div>
        <div className="card-body row mt-5">
          <Form>
            <FloatingLabel controlId="nameInput" label="Name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel controlId="bioInput" label="Bio" className="mb-3">
              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                placeholder="Enter your bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="locationInput"
              label="Location"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel
              controlId="websiteInput"
              label="Website"
              className="mb-3"
            >
              <Form.Control
                type="url"
                placeholder="Enter your website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </FloatingLabel>

            <FloatingLabel controlId="birthdateInput" label="Birthdate">
              <Form.Control
                type="date"
                placeholder="Enter your birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </FloatingLabel>
          </Form>
        </div>
      </div>
    </>
  );
};
export default EditProfileComponent;
