const getSignup = (req, res) => {
  res.send('get signup');
};

const getLogin = (req, res) => {
  res.send('get login');
};

const signup = (req, res) => {
  const { username, password } = req.body;

  res.send('post signup');
};

const login = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  res.send('post signup');
};

module.exports = {
  getSignup,
  getLogin,
  signup,
  login,
};
