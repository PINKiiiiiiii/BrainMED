import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import brain from "./Picture/BrainMED .png";
import Home from "./Home";
import Test from "./Test";
import Record from "./Record";
import Aboutus from "./Aboutus";
import AD from "./AD";

function Control() {
  return (
    <div class="container-fluid">
      <nav
        class="navbar navbar-expand-lg bg-nav text-uppercase fixed-top"
        id="mainNav"
      >
        <div class="container-fluid">
          <img src={brain} style={{ height: "50px" }} />
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-0 mx-lg-1">
                <NavLink className="nav-link" to="/home">
                  <h6>หน้าหลัก</h6>
                </NavLink>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <NavLink className="nav-link" to="/test">
                  <h6>แบบทดสอบ</h6>
                </NavLink>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <NavLink className="nav-link" to="/record">
                  <h6>สถิติ</h6>
                </NavLink>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <NavLink className="nav-link" to="/alzheimer's">
                  <h6>ข้อมูลโรค</h6>
                </NavLink>
              </li>
              <li class="nav-item mx-0 mx-lg-1">
                <NavLink className="nav-link" to="/aboutus">
                  <h6>เกี่ยวกับเรา</h6>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="test" element={<Test />} />
        <Route path="record" element={<Record />} />
        <Route path="alzheimer's" element={<AD />} />
        <Route path="aboutus" element={<Aboutus />} />
      </Routes>
    </div>
  );
}

export default Control;
