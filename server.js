import express from 'express';
import cors from 'cors';
import fs from 'fs';


const app = express();
const PORT = 5000;

app.use(cors({
  origin: "http://localhost:3000", // 정확하게 origin만 넣기
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));

app.use(express.json());

let seatData = [];

app.post("/api/seats/init", (req, res) => {
  seatData = req.body;
  console.log("초기 좌석 데이터:", seatData);

  console.log("초기 좌석 데이터:", seatData);

  // JSON 파일로 저장
  fs.writeFile('seats.json', JSON.stringify(seatData, null, 2), (err) => {
    if (err) {
      console.error("파일 저장 오류:", err);
      return res.status(500).json({ message: "파일 저장 중 오류가 발생했습니다." });
    }

  })


  
  res.json({ message: "좌석이 초기화되었습니다." });
});

app.get('/', (req, res) => {
  res.send('서버가 정상 작동 중입니다.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
