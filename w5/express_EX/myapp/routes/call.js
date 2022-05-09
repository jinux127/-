const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('test express');
    res.send('express');
    next(); // 현재 미들웨어의 기능을 마치고, 다음 미들웨어로 연결을 해준다.
});

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(id);
});

router.get('/hello', (req, res) => {
    console.log('test express');
    res.send('hello express');
});

module.exports = router;
