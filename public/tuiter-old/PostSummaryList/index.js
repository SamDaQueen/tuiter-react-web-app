import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
  return `
    <ul class="list-group p-0">
        ${posts.map((post) => PostSummaryItem(post)).join("")}
    </ul>
    `;
};
export default PostSummaryList;
