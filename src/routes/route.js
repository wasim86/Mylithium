const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('hello guys')
});

module.exports = router;