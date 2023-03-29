import React from "react";
import postsArray from "../data/tuits.json";
import "./index.css";
import PostItem from "./post-list-item";

const PostList = () => {
  return (
    <ul className="list-group">
      {postsArray.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </ul>
  );
};
export default PostList;
