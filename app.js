const express = require('express');
const app = express();

const studentRoutes = require('./api/routes/student');

app.use('/student',studentRoutes);


module.exports = app;

