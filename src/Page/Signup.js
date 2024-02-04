import { Routes, Route, NavLink } from "react-router-dom";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import signup from "./Picture/signup.jpg";
import brain from "./Picture/BrainMED log.png";
import Login from "./Login";

function Signup() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-5-50" style={{ padding: 0 }}>
          <img src={signup} style={{ height: "800px" }} />
        </div>
        <div
          class="col-6 "
          style={{ padding: 0, marginTop: "25px", marginBottom: "25px" }}
        >
          <div class="d-flex justify-content-center">
            <img src={brain} style={{ height: "60px" }} />
          </div>
          <h1
            style={{ color: "#5B5B5B", marginTop: "20px", textAlign: "center" }}
          >
            ลงทะเบียน
          </h1>
          <div class="row" style={{ marginTop: "20px" }}>
            <div class="col-6">
              <TextField required fullWidth label="ชื่อ" color="secondary" />
            </div>
            <div class="col-6">
              <TextField required fullWidth label="นามสกุล" color="secondary" />
            </div>
          </div>
          <div class="row" style={{ marginTop: "20px" }}>
            <div class="col-6">
              <TextField required fullWidth label="อายุ" color="secondary" />
            </div>
            <div class="col-6">
              <TextField
                id="outlined-select-currency"
                select
                fullWidth
                label="เพศ"
                color="secondary"
              />
            </div>
          </div>
          <div class="row" style={{ marginTop: "20px" }}>
            <TextField required fullWidth label="Email" color="secondary" />
          </div>
          <div class="row" style={{ marginTop: "20px" }}>
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
          <div class="row" style={{ marginTop: "20px" }}>
            <TextField
              required
              fullWidth
              label="กรอกรหัสผ่านอีกครั้ง"
              color="secondary"
            />
          </div>

          <div class="row justify-content center" style={{ marginTop: "20px" }}>
            <button
              type="button"
              class="btn btn-purple"
              style={{ height: "100px", width: "100%", borderRadius: "100px" }}
            >
              <h3 style={{ color: "#FFFAFA" }}>ลงทะเบียน</h3>
            </button>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <span style={{ fontSize: "1.5em" }}>
                เคยลงทะเบียนแล้ว?&ensp;
                <Link
                  to="login"
                  style={{ fontWeight: "bold", color: "#5A3C8B" }}
                >
                  เข้าสู่ระบบ
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Signup;
