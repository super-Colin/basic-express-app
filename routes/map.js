var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/test.html'));
})

module.exports = router;
