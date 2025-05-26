
const express = require('express');
const app = express();
app.use(express.json());

app.post('/analytics', (req, res) => {
  console.log("Analyzing:", req.body);
  res.json({ status: 'analyzed' });
});

app.listen(5003, () => console.log('Analytics Service running on port 5003'));
