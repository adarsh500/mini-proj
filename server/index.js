const express = require('express');
const path = require('path');
const app = express();
const authRoutes = require('./routes/authRoutes');
// const router = require('router');

//middleware
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/', (req, res) => res.send('hello there'));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from OBI WAN KENOBI!' });
});

app.get('/cunt', (req, res) => res.send('mike hunt'));
app.use(authRoutes);

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
