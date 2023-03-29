const PostItem = (post) => {
  return `
      <div class="list-group-item wd-post">
        <div class="row p-2">
            <div class="col-md-1 col-sm-2">
                <img class="wd-avatar" src=${post.avatar}>
            </div>
            <div class="col-md-11 col-sm-10 ps-4">
                <div class="row">
                    <div class="float-start col-11">
                        <span class="fw-bold text-white">${post.userName}</span>
                        <i class="fas fa-circle-check ms-2" style="color: white"></i>
                        <span class="text-muted ms-2">@${post.handle} • ${
    post.time
  }</span>
                        <br>
                        <span class="text-white">${post.post_title}</span>
                    </div>
                    <i class="fas fa-ellipsis col-1" style="color: #536471"></i>
                </div>
                <div class="card rounded-4 border-dark m-2 ms-0">
                    <img class="card-img-top ${
                      post.card_title ? "rounded-bottom" : "rounded"
                    } rounded-4" src=${post.image}>
                    ${
                      !post.card_title && !post.card_text && !post.link
                        ? ""
                        : `
                    <div class="card-body">
                        ${
                          post.card_title
                            ? `<h6 class="card-title">${post.card_title}</h6>`
                            : ""
                        }
                        ${
                          post.card_title
                            ? `<p class="card-text text-muted mb-0">${post.card_text}</p>`
                            : ""
                        }
                        ${
                          post.card_title
                            ? `
                        <a href="https://www.${post.link}" class="card-text text-muted">
                            <i class="fas fa-link"></i>
                            ${post.link}
                        </a>`
                            : ""
                        }
                    </div>`
                    }
                </div>
                <div class="row text-muted">
                    <div class="col-3 d-flex align-items-center">
                        <i class="far fa-comment"></i>
                        <p class="mb-0 ms-3">${post.comments}</p>
                    </div>
                    <div class="col-3 d-flex align-items-center">
                        <i class="fas fa-retweet"></i>
                        <p class="mb-0 ms-3">${post.tuits}</p>
                    </div>
                    <div class="col-3 d-flex align-items-center">
                        ${
                          post.liked
                            ? '<i class="fas fa-heart"></i>'
                            : '<i class="far fa-heart"></i>'
                        }
                        <p class="mb-0 ms-3">${post.likes}</p>
                    </div>
                    <div class="col-3">
                        <i class="fas fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
};
export default PostItem;
