import React from "react";
import TuitList from "../tuits";
import "./index.css";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return (
    <>
      <h2>Home</h2>
      <WhatsHappening />
      <TuitList />
    </>
  );
};
export default HomeComponent;
