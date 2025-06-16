const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '/main')));

app.post('/main', (req, res) => {
    res.sendFile(path.join(__dirname, '/the_crown/src/app/main/page.tsx'));
});

app.listen(PORT, () => {
    console.log(`START SERVER`);
});