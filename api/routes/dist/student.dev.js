"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function (req, res, next) {
  res.status(200).json({
    message: "Get Requests"
  });
});
router.post('/', function (req, res, next) {
  res.status(201).json({
    message: "Post Request"
  });
});
module.exports = router;
//# sourceMappingURL=student.dev.js.map
