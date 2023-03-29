import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
  $("#wd-explore").append(`
      <div class="row mt-4 mb-4">
           <div class="col-xl-2 col-lg-1 col-sm-2">
                ${NavigationSidebar("explore")}
           </div>
           <div class="col-xl-6 col-lg-7 col-sm-10 ps-4 pe-4">
                ${ExploreComponent()}
           </div>
           <div class="col-lg-4 d-none d-lg-block">
                ${WhoToFollowList()}
           </div>
      </div>
   `);
}

$(exploreComponent);
