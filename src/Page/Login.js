import { Routes, Route, NavLink } from "react-router-dom";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import login from "./Picture/Login.jpg";
import brain from "./Picture/BrainMED log.png";
import Signup from "./Signup";
import LoginDoc from "./LoginDoc";

function Login() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-5-50" style={{ padding: 0 }}>
          <img src={login} style={{ height: "740px" }} />
        </div>
        <div class="col-6" style={{ padding: 0 }}>
          <div class="d-flex justify-content-center">
            <img src={brain} style={{ height: "60px", marginTop: "50px" }} />
          </div>
          <h1
            style={{ color: "#5B5B5B", marginTop: "20px", textAlign: "center" }}
          >
            เข้าสู่ระบบ
          </h1>
          <div class="row" style={{ marginTop: "45px" }}>
            <TextField
              required
              fullWidth
              label="ชื่อผู้ใช้"
              color="secondary"
            />
          </div>
          <div class="row" style={{ marginTop: "20px" }}>
            <TextField required fullWidth label="รหัสผ่าน" color="secondary" />
          </div>
          <div class="row justify-content center" style={{ marginTop: "20px" }}>
            <button
              type="button"
              class="btn btn-purple"
              style={{ height: "100px", width: "100%", borderRadius: "100px" }}
            >
              <h3 style={{ color: "#FFFAFA" }}>เข้าสู่ระบบ</h3>
            </button>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <span style={{ fontSize: "1.5em" }}>
                ยังไม่เคยลงทะเบียน?&ensp;
                <Link
                  to="signup"
                  style={{ fontWeight: "bold", color: "#5A3C8B" }}
                >
                  ลงทะเบียน
                </Link>
              </span>
            </div>
          </div>
          <div class="row justify-content center" style={{ marginTop: "20px" }}>
            <button
              type="button"
              class="btn btn-purple2"
              style={{
                height: "100px",
                width: "100%",
                borderRadius: "100px",
              }}
            >
              <h3 style={{ color: "#5a3c8b" }}>เข้าสู่ระบบสำหรับแพทย์</h3>
            </button>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="doctor" element={<LoginDoc />} />
      </Routes>
    </div>
  );
}

export default Login;
