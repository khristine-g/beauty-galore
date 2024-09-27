import React, { useState } from 'react';
import '../Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([{ from: 'bot', text: 'Hello! How can I help you today?' }]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { from: 'user', text: input };
      setMessages([...messages, userMessage]);

      // Send message to backend and get response
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages([...messages, userMessage, { from: 'bot', text: data.reply }]);

      setInput('');
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={msg.from === 'bot' ? 'bot-message' : 'user-message'}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
