import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return `
           <div class="row">
               <div class="col-11 p-0">
                    <i class="fa-solid fa-magnifying-glass position-absolute mt-2 ms-3"></i>
                    <input class="form-control wd-rounded ps-5" placeholder="Search Tuiter" type="text">
                </div>
                <div class="col-1 d-flex align-items-center">
                    <i class="fas fa-cog fa-2x" style="color: #5E38A4"></i>
                </div>
           </div>
            <div class="row mt-2">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">For You</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
                        </li>
                    </ul>
            </div>
            <div class="row mt-2">
                    <div class="p-0 position-relative">
                        <img class="col-12" src="../../images/spacex.webp">
                        <h1 class="fw-bold text-white position-absolute left-0 bottom-0 p-2">SpaceX's Starship</h1>
                    </div>
                    ${PostSummaryList()}
            </div>
    `;
};
export default ExploreComponent;
