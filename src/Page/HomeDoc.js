import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import brain from "./Picture/BrainMED .png";

function HomeDoc() {
  return (
    <div class="container-fluid">
      <nav
        class="navbar navbar-expand-lg bg-nav text-uppercase fixed-top"
        id="mainNav"
      >
        <div class="container-fluid">
          <img src={brain} style={{ height: "50px" }} />
        </div>
      </nav>
      <div class="row" style={{ marginTop: "80px" }}></div>
      <Routes>
        <Route path="home" element={<HomeDoc />} />
      </Routes>
    </div>
  );
}

export default HomeDoc;
