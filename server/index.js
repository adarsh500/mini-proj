const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const connectDB = require('./database/connection');
const cors = require('cors');
const cookieParser = require('cookie-parser');
dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();
const authRoutes = require('./routes/authRoutes');

//middleware
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(cookieParser());

//DB connection
connectDB();

//parse requests to body parser
app.use(bodyparser.json());

app.use(express.static(path.resolve(__dirname, '../client/build')));

//Adding routers
app.get('/', (req, res) => res.send('hello there'));
app.use('/', require('./routes/router'));
app.get('/cunt', (req, res) => res.send('mike hunt'));
app.use(authRoutes);

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.get('/set-cookies', (req, res) => {
  //eg seting a new cookie
  res.cookie('newUser', false);
  res.cookie('lakjs', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
  res.send('you got it');
});

app.get('/get-cookies', (req, res) => {
  const cookies = req.cookies;
  res.json(cookies);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
