import { TextField } from "@mui/material";
import login from "./Picture/Login.jpg";
import brain from "./Picture/BrainMED log.png";

function Login() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-5-50" style={{ padding: 0 }}>
          <img src={login} style={{ height: "750px" }} />
        </div>
        <div class="col-6" style={{ padding: 0 }}>
          <div class="d-flex justify-content-center">
            <img src={brain} style={{ height: "60px", marginTop: "50px" }} />
          </div>
          <h1
            style={{ color: "#5B5B5B", marginTop: "20px", textAlign: "center" }}
          >
            เข้าสู่ระบบ
            <br />
            สำหรับแพทย์
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
        </div>
      </div>
    </div>
  );
}

export default Login;
