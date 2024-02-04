import { TextField } from "@mui/material";

function Test() {
  return (
    <div
      class="container-fluid"
      style={{
        marginTop: "100px",
        marginBottom: "100px",
        paddingLeft: "40px",
        paddingRight: "40px",
      }}
    >
      <div class="row">
        <h4 style={{ fontWeight: "bold" }}>กรอกข้อมูลส่วนตัว</h4>
      </div>
      <div class="row" style={{ marginTop: "20px" }}>
        <TextField required fullWidth label="โรคประจำตัว" color="secondary" />
      </div>
      <div class="row" style={{ marginTop: "20px" }}>
        <div class="col-6">
          <TextField
            id="outlined-select-currency"
            select
            fullWidth
            label="จังหวัด"
            color="secondary"
          />
        </div>
        <div class="col-6">
          <TextField
            id="outlined-select-currency"
            select
            fullWidth
            label="โรงพยาบาล"
            color="secondary"
          />
        </div>
      </div>
      <br />
      <div class="row ">
        <div class="form-check d-flex justify-content-center">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            style={{ width: "30px", height: "30px" }}
          />
          <label
            class="form-check-label"
            for="flexCheckDefault"
            style={{ fontSize: "1.6em", color: "black" }}
          >
            &ensp;มีประวัติ คนในครอบครัว ป่วยเป็นโรคอัลไซเมอร์
          </label>
        </div>
      </div>
      <div class="row ">
        <div
          class="form-check d-flex justify-content-center"
          style={{ marginTop: "60px" }}
        >
          <input
            class="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            style={{ width: "20px", height: "20px" }}
          />
          <label
            class="form-check-label"
            for="flexCheckDefault"
            style={{ fontSize: "1.2em", color: "#353535" }}
          >
            &ensp;ข้าพเจ้ายินยอมให้เปิดเผยข้อมูลส่วนบุคคลของข้าพเจ้าต่อโรงพยาบาลที่ร่วมมือ
          </label>
        </div>
      </div>
      <div class="row justify-content center">
        <button
          type="button"
          class="btn btn-purple"
          style={{ height: "100px", width: "100%", borderRadius: "100px" }}
        >
          <h3 style={{ color: "#FFFAFA" }}>เริ่มต้น</h3>
        </button>
      </div>
    </div>
  );
}

export default Test;
