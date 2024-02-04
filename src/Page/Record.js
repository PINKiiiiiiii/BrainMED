import { textAlign } from "@mui/system";

function Record() {
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
        <h4 style={{ fontWeight: "bold", textAlign: "center" }}>
          สถิติการทำแบบทดสอบในปีนี้
        </h4>
      </div>
    </div>
  );
}

export default Record;
