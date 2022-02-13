"use strict";

var express = require('express');

var app = express();

var studentRoutes = require('./api/routes/student');

app.use('/student', studentRoutes);
module.exports = app;
//# sourceMappingURL=app.dev.js.map
