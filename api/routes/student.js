const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const students = require('../models/students');


router.get('/',(req,res,next) => {
    res.status(200).json({
        message: "Get Requests"
    })
})

router.post('/',(req,res,next) =>{
  const info ={
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      batch: req.body.batch
  }

  const students = new students(info);
  students.save()
  .then(result => res.status(200).json(result))
      .catch(err => res.status(500).json(err));
  
})

module.exports = router;