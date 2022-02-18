const express = require('express');
const app = express();


const mongoose = require('mongoose');

const studentsRoutes = require('./api/routes/student');

mongoose.connect('mongodb+srv://nahid_089:'+process.env.MONGO_PASS +'@cluster0.h0rib.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');



app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use('/student',studentsRoutes);


module.exports = app;

