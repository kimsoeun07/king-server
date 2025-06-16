// const express = require('express');
// const path = require('path');
// const cors = require('cors');
import express from 'express';
import cors from 'cors';
import path from 'path'; // 추가 필요
const PORT = 5000; // 3000은 보통 프론트서버 기본 포트니까 다른 포트 추천

;

const app = express();

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