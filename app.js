const express = require('express');
const app = express();


const mongoose = require('mongoose');

const studentRoutes = require('./api/routes/student');

mongoose.connect('mongodb+srv://nahid_089:'+ process.env.MANGO_PASS +'@cluster0.h0rib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use('/student',studentRoutes);


module.exports = app;

