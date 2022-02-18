"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var studentRoutes = require('./api/routes/student');

mongoose.connect('mongodb+srv://nahid_089:' + process.env.MANGO_PASS + '@cluster0.h0rib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/student', studentRoutes);
module.exports = app;
//# sourceMappingURL=app.dev.js.map
