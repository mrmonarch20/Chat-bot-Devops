
import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';

function App() {
  const [msg, setMsg] = React.useState('');
  const [res, setRes] = React.useState('');

  const send = async () => {
    const response = await axios.post('http://localhost:8080/chat', { message: msg });
    setRes(response.data.response);
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <textarea onChange={e => setMsg(e.target.value)} />
      <button onClick={send}>Send</button>
      <p>Response: {res}</p>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
