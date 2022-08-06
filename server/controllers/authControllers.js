const jwt = require('jsonwebtoken');
const User = require('../models/User');

const handleError = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  if (err.message.includes('Incorrect password')) {
    errors.password = 'the password is incorrect';
  }

  if (err.message.includes('User not found')) {
    errors.email = 'the user is unregistered';
  }

  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'secret', {
    expiresIn: maxAge,
  });
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, {
      httpOnly: false,
      maxAge: maxAge * 1000,
      path: '/',
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const error = handleError(err);
    res.status(400).json({ error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, {
      httpOnly: false,
      maxAge: maxAge * 1000,
      path: '/',
    });
    console.log('login user', user);
    res.status(201).json({ user: user._id });
  } catch (err) {
    // console.log('loginerr', err.message);
    const error = handleError(err);
    res.status(400).json({ error });
  }
};

const logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
};

module.exports = {
  signup,
  login,
  logout,
};
