import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import Nav from "../nav";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import NavigationSidebar from "./navigation-sidebar";
import ProfileComponent from "./profile";
import postsReducer from "./reducers/posts-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import whoReducer from "./reducers/who-reducer";
import WhoToFollowList from "./who-to-follow-list";

const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer, posts: postsReducer },
});

function Tuiter() {
  return (
    <Provider store={store}>
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
            <Route path="profile" element={<ProfileComponent />} />
          </Routes>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
}

export default Tuiter;
