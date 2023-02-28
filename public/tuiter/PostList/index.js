import PostItem from "./PostItem.js";
import posts from "./posts.js";

const PostList = () => {
  return `
    <ul class="list-group p-0">
        ${posts.map((post) => PostItem(post)).join("")}
    </ul>
    `;
};
export default PostList;