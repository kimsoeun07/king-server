const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const cors = require('cors');

app.use(cors());

app.use(express.static(path.join(__dirname, '/main')));

let seatData = []; // 메모리에 좌석 저장

// ✅ 좌석 초기화
app.post("/main", (req, res) => {
  seatData = req.body; // 클라이언트가 보낸 좌석 배열 저장
  console.log("초기 좌석 데이터:", seatData);
  res.json({ message: "좌석이 초기화되었습니다." });
});
