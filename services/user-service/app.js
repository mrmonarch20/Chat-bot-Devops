
const express = require('express');
const app = express();
app.use(express.json());

app.get('/user', (req, res) => {
  res.json({ user: 'John Doe' });
});

app.listen(5001, () => console.log('User Service running on port 5001'));
