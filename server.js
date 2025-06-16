import express from 'express';
import cors from 'cors';
import fs from 'fs';

import { getDatabase, ref, set, get } from "firebase/database";
import { database } from './firebase-config.js';


const app = express();
const PORT = 5000;

app.use(cors({
  origin: "http://localhost:3000", // 정확하게 origin만 넣기
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));

app.use(express.json());



app.post("/api/seats/init", async (req, res) => {
  const seatData = req.body;

  try {
    await set(ref(database, 'seats'), seatData);
    console.log("Firebase에 좌석 데이터 저장 완료");
    res.json({ message: "좌석이 Firebase에 저장되었습니다." });
  } catch (error) {
    console.error("Firebase 저장 오류:", error);
    res.status(500).json({ error: "저장 실패" });
  }
});

let seatData = [];

app.post("/api/seats/vote", async (req, res) => {
  const { seatId } = req.body;

  if (typeof seatId !== "number" || isNaN(seatId))  {
    return res.status(400).json({ error: "seatId must be a number" });
  }

  const seatRef = ref(database, `seats/${seatId}`);

  try {
    const snapshot = await get(seatRef);

    if (!snapshot.exists()) {
      return res.status(404).json({ error: "Seat not found" });
    }

    const seatData = snapshot.val();
    const updatedSelect = (seatData.select || 0) + 1;

    await update(seatRef, { select: updatedSelect });

    return res.json({ message: "투표 완료", updatedSelect });
  } catch (error) {
    console.error("투표 처리 실패:", error);
    return res.status(500).json({ error: "서버 오류" });
  }
});


app.get('/', (req, res) => {
  res.send('서버가 정상 작동 중입니다.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
