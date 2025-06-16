const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/main')));

let seatData = []; // 메모리에 좌석 저장

// 좌석 초기화 API
app.post("/api/seats/init", (req, res) => {
  seatData = req.body;
  console.log("초기 좌석 데이터:", seatData);
  res.json({ message: "좌석이 초기화되었습니다." });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});