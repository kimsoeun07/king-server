import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 5000; // 3000은 보통 프론트서버 기본 포트니까 다른 포트 추천

app.use(cors()); // 일단 모든 origin 허용
app.use(express.json());
app.use(express.static(path.join(__dirname, '/main')));

let seatData = [];

app.post("/api/seats/init", (req, res) => {
  seatData = req.body;
  console.log("초기 좌석 데이터:", seatData);
  res.json({ message: "좌석이 초기화되었습니다." });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
