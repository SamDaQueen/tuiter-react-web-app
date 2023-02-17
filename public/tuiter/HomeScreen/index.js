import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

function exploreComponent() {
  $("#wd-home").append(`
      <div class="row mt-4 mb-4">
           <div class="col-xl-2 col-lg-1 col-sm-2">
                ${NavigationSidebar("home")}
           </div>
           <div class="col-xl-6 col-lg-7 col-sm-10 ps-2 pe-2">
                ${PostList()}
           </div>
           <div class="col-lg-4 d-none d-lg-block">
                ${PostSummaryList()}
           </div>
      </div>
   `);
}

$(exploreComponent);
