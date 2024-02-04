import we from "./Picture/we.jpg";
import one from "./Picture/1.png";
import two from "./Picture/2.jpg";
import three from "./Picture/3.png";

function Aboutus() {
  return (
    <div
      class="container-fluid"
      style={{
        marginTop: "100px",
        marginBottom: "100px",
        paddingLeft: "30px",
      }}
    >
      <div class="row">
        <div class="col-6 d-flex justify-content-center">
          <img src={we} style={{ width: "100%", borderRadius: "50px" }} />
        </div>
        <div class="col-6" style={{ textAlign: "center" }}>
          <h1
            style={{ color: "black", marginTop: "60px", marginBottom: "30px" }}
          >
            คณะผู้จัดทำ
          </h1>
          <h4>
            นายเลนนี โธมัส
            <br />
            นายติณณ์ โพธิกานนท์
            <br />
            นางสาวธัญญาดา ทองใบ
            <br />
            <br />
            โรงเรียนปรินส์รอยแยลส์วิทยาลัย
          </h4>
        </div>
      </div>
      <div class="row" style={{ marginTop: "80px", textAlign: "center" }}>
        <h1
          style={{
            color: "black",
            marginBottom: "30px",
          }}
        >
          แพทย์ที่ปรึกษา
        </h1>
        <div class="col-1"></div>

        <div class="col-3-50">
          <img src={one} style={{ height: "300px", borderRadius: "50px" }} />
          <h5>ผศ.นพ. สุรัตน์ ตันประเวช</h5>
          <h2 style={{ color: "#8885AD" }}>
            แพทย์ผู้เชี่ยวชาญด้านระบบประสาทและสมอง
          </h2>
        </div>
        <div class="col-3">
          <img src={three} style={{ height: "300px", borderRadius: "50px" }} />
          <h5>ผศ.นพ. อธิวัฒน์ สุนทรพันธ์</h5>
          <h2 style={{ color: "#8885AD" }}>
            เชี่ยวชาญพิเศษด้านสมองและความผิดปกติทางประสาทวิทยา
          </h2>
        </div>

        <div class="col-3-50">
          <img src={two} style={{ height: "300px", borderRadius: "50px" }} />
          <h5>ผศ.พญ.สลิตา อังกุระวรานนท์</h5>
          <h2 style={{ color: "#8885AD" }}>
            อาจารย์ภาควิชารังสีวิทยา คณะแพทยศาสตร์ มหาวิทยาลัยเชียงใหม่
          </h2>
        </div>

        <div class="col-1"></div>
      </div>
    </div>
  );
}

export default Aboutus;
