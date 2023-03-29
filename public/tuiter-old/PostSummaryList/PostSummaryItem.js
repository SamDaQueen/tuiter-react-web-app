const PostSummaryItem = (post) => {
  return `
     <div class="list-group-item">
        <div class="row">
            <div class="col-10">
                <span class="text-muted">${post.topic}</span><br>
                <span class="fw-bold">${post.userName}</span><i
                    class="fa-solid fa-circle-check ms-2"></i><span
                    class="text-muted"> - ${post.time}</span>
                <br>
                <span class="fw-bold">${post.title}</span>
            </div>
            <div class="col-2 p-0">
                <img class="wd-post-image" src=${post.image}>
            </div>
        </div>
     </div>
    `;
};
export default PostSummaryItem;
