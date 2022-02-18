"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var studentsRoutes = require('./api/routes/student');

mongoose.connect('mongodb+srv://nahid_089:' + process.env.MONGO_PASS + '@cluster0.h0rib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use('/student', studentsRoutes);
module.exports = app;
//# sourceMappingURL=app.dev.js.map
