const NavigationSidebar = () => {
  return `
       <div class="list-group">
            <a class="list-group-item" href="#"><i class="fas fa-kiwi-bird"></i></a>
            <a class="list-group-item" href="../home.html"><i class="fas fa-house me-2"></i><span
                    class="d-none d-xl-inline">Home</span></a>
            <a class="list-group-item active" href="#"><i class="fas fa-hashtag me-2"></i><span
                    class="d-none d-xl-inline">Explore</span></a>
            <a class="list-group-item" href="#"><i class="fas fa-bell me-2"></i><span
                    class="d-none d-xl-inline">Notifications</span></a>
            <a class="list-group-item" href="#"><i class="fas fa-envelope me-2"></i><span
                    class="d-none d-xl-inline">Messages</span></a>
            <a class="list-group-item" href="../bookmarks/index.html"><i class="fas fa-bookmark me-2"></i><span
                    class="d-none d-xl-inline">Bookmarks</span></a>
            <a class="list-group-item" href="#"><i class="fas fa-list me-2"></i><span
                    class="d-none d-xl-inline">Lists</span></a>
            <a class="list-group-item" href="../profile.html"><i class="fas fa-user me-2"></i><span
                    class="d-none d-xl-inline">Profile</span></a>
            <a class="list-group-item" href="#"><i class="fas fa-ellipsis me-2"></i><span
                    class="d-none d-xl-inline">More</span></a>
       </div>
       <button class="btn btn-primary mt-2 col-md-12" type="button">Tuit</button>
 `;
};
export default NavigationSidebar;
