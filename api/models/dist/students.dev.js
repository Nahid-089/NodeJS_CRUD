"use strict";

var mongoose = require('mongoose');

var studentsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  batch: String
});
module.exports = mongoose.model('students', studentsSchema);
//# sourceMappingURL=students.dev.js.map
