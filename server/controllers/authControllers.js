const User = require('../models/User');

const handleError = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  if (err.message.includes('user validation failed')) {
    // console.log(Object.values(err.erros));
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const getSignup = (req, res) => {
  res.send('get signup');
};

const getLogin = (req, res) => {
  res.send('get login');
};

const signup = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  // res.send('post signup');
  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    const error = handleError(err);
    res.status(400).json({ error });
  }
};

const login = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  console.log(username, password);
  res.send('post signup');
};

module.exports = {
  getSignup,
  getLogin,
  signup,
  login,
};
