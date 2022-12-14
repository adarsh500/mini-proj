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
// const { checkUser } = require('./middleware/authMiddleware');

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
// app.get('*', checkUser);
app.get('/', (req, res) => {
  res.send('hello there');
});
app.use('/', require('./routes/router'));
app.use(authRoutes);

app.get('/*', (req, res) => {
  console.log('path is', __dirname);
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
