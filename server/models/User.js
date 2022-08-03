const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'please enter a password'],
    minLength: [6, 'minimum password length is 6 characters'],
  },
});

//fire up a function before doc is saved to db
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  console.log('user about to be created', this);
  next();
});

//fire up a function when a doc is saved to db
userSchema.post('save', (doc, next) => {
  console.log('new user was created', doc);
  next();
});

const User = mongoose.model('user', userSchema);

module.exports = User;
