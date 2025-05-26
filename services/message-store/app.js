
const express = require('express');
const app = express();
app.use(express.json());

const messages = [];

app.post('/store', (req, res) => {
  messages.push(req.body.message);
  res.json({ status: 'stored' });
});

app.listen(5002, () => console.log('Message Store Service running on port 5002'));
