const WhoToFollowListItem = (who) => {
  return `
    <li class="list-group-item">
        <img class="wd-avatar me-3 float-start" src=${who.avatarIcon}>
        <div class="float-start">
            <span class="fw-bold">${who.userName}</span><i class="fa-solid fa-circle-check ms-2"></i>
            <br>
            <span>@${who.handle}</span>
        </div>
        <div class="d-flex align-items-center justify-content-end wd-follow">
            <button class="btn btn-secondary">Follow</button>
        </div>
    </li>
`;
};
export default WhoToFollowListItem;
