const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    msg: 'Hi from helper'
  });
});

app.get('/data', (req, res) => {
  res.json({
    data: [{ key: 1, value: 5 }, { key: 2, value: 7 }, { key: 3, value: 120 }]
  });
});

app.listen(3001, () => {
  console.log('Helper listening on port 3001');
});
