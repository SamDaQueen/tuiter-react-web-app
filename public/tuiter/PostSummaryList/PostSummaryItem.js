const PostSummaryItem = (post) => {
  return `
     <div class="list-group-item">
        <div class="row">
            <div class="col-md-10 col-sm-9">
                <span class="text-secondary">${post.topic}</span><br>
                <span class="fw-bold">${post.userName}</span><i
                    class="fa-solid fa-circle-check ms-2"></i><span
                    class="text-secondary"> - ${post.time}</span>
                <br>
                <span class="fw-bold">${post.title}</span>
            </div>
            <div class="col-2">
                <img class="wd-post-image" src=${post.image}>
            </div>
        </div>
     </div>
    `;
};
export default PostSummaryItem;
