import happy from "./Picture/group1 (1).png";
import Test from "./Test";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";

function Home() {
  return (
    <div class="container-fluid" style={{ marginTop: "80px" }}>
      <div class="row">
        <div class="col-5" style={{ marginLeft: "35px" }}>
          <h2 style={{ margintop: "450px" }}>ยินดีต้อนรับ</h2>
          <h1>Brain Medical Equipment for Screening Dementia</h1>
          <h2>
            ระบบคัดกรอง และประเมินภาวะถดถอยของสมอง ด้วยแบบทดสอบการทำงานของดวงตา
          </h2>
          <button
            type="button"
            class="btn btn-purple"
            style={{ height: "100px", width: "400px", borderRadius: "100px" }}
          >
            <NavLink className="nav-link" to="/test">
              <h1 style={{ color: "#FFFAFA" }}>เริ่มทดสอบ</h1>
            </NavLink>
          </button>
        </div>
        <div class="col-6 justify-content-end" style={{ marginRight: "60px" }}>
          <img src={happy} style={{ height: "420px" }}></img>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div
        class="row bg-home"
        style={{ paddingTop: "50px", paddingBottom: "50px" }}
      >
        <div class="col-0-50"></div>
        <div class="col-2 d-flex justify-content-center">
          <div class="circle">
            <c class="text">
              1<br />
              กรอกข้อมูล
              <br />
              ส่วนตัว
            </c>
          </div>
        </div>
        <div
          class="col-1 d-flex justify-content-center"
          style={{ paddingTop: "85px" }}
        >
          <div class="arrow-right"></div>
        </div>
        <div class="col-2 d-flex justify-content-center">
          <div class="circle" style={{ backgroundColor: "#996FDE" }}>
            <c class="text">
              2<br />
              เตรียมตัว
              <br />
              (Calibrate)
            </c>
          </div>
        </div>
        <div
          class="col-1 d-flex justify-content-center"
          style={{ paddingTop: "85px" }}
        >
          <div class="arrow-right"></div>
        </div>
        <div class="col-2 d-flex justify-content-center">
          <div class="circle" style={{ backgroundColor: "#825FBC" }}>
            <c class="text">
              3<br />
              ทดสอบ
            </c>
          </div>
        </div>
        <div
          class="col-1 d-flex justify-content-center"
          style={{ paddingTop: "85px" }}
        >
          <div class="arrow-right"></div>
        </div>
        <div class="col-2 d-flex justify-content-center">
          <div class="circle" style={{ backgroundColor: "#5A3C8B" }}>
            <c class="text">
              4<br />
              ผลลัพธ์
            </c>
          </div>
        </div>
        <div class="col-0-50"></div>
      </div>
      <div class="row">
        <div class="col-12">
          <h1
            style={{
              color: "#8885AD",
              paddingTop: "30px",
              paddingBottom: "30px",
              textAlign: "center",
            }}
          >
            ตรวจง่าย ๆ ใน 4 ขั้นตอน
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
