"use strict";

var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

var student = require('../models/students');

router.get('/', function (req, res, next) {
  res.status(200).json({
    message: "Get Requests"
  });
});
router.post('/', function (req, res, next) {
  var info = {
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    batch: req.body.batch
  };
  var students = new students(info);
  students.save().then(function (result) {
    return res.status(200).json(result);
  })["catch"](function (err) {
    return res.status(500).json(err);
  });
});
module.exports = router;
//# sourceMappingURL=student.dev.js.map
