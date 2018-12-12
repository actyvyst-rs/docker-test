const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    msg: 'Hi from Gateway'
  });
});

app.get('/data', async (req, res) => {
  const data = await axios.get('http://helper:3001/data');
  res.json(data.data);
});

app.listen(3000, () => {
  console.log('Gateway listening on port 3000');
});

module.exports.app = app;
module.exports.multiplyTest = (a, b) => a * b;
