import React from "react";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import { Route, Routes } from "react-router";
import Nav from "../nav";
import PostSummaryList from "./post-summary-list";

function Tuiter() {
  return (
    <div className="row mt-2">
      <Nav />
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar />
      </div>
      <div
        className="col-10 col-md-10 col-lg-7 col-xl-6"
        style={{ position: "relative" }}
      >
        <Routes>
          <Route index element={<HomeComponent />} />
          <Route path="home" element={<HomeComponent />} />
          <Route path="explore" element={<ExploreComponent />} />
        </Routes>
      </div>
      <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <Routes>
          <Route index element={<PostSummaryList />} />
          <Route path="home" element={<PostSummaryList />} />
          <Route path="explore" element={<WhoToFollowList />} />
        </Routes>
      </div>
    </div>
  );
}

export default Tuiter;
