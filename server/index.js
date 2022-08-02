const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const connectDB = require('./database/connection');
const cors = require('cors');
dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({ origin: '*' }));

//DB connection
connectDB();

//parse requests to body parser
app.use(bodyparser.json());

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', (req, res) => res.send('hello there'));

// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello from OBI WAN KENOBI!' });
// });

//Adding routers
app.use('/', require('./routes/router'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
