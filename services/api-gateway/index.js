
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/chat', async (req, res) => {
  try {
    const response = await axios.post('http://chat-service:5000/chat', req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

app.listen(8080, () => console.log('API Gateway running on port 8080'));
