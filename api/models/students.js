const mongoose = require('mongoose');

const studentsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:  String,
    batch:String

})

module.exports = mongoose.model('students',studentsSchema);