const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userId: String,
  password: String,
  name: String,
  age: Number
});

module.exports = User = mongoose.model('personalInfo', UserSchema,'personalInfo');
