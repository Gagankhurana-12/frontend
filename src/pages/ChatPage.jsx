import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatPage.css';

const ChatPage = () => {
  const navigate = useNavigate();
  const [activeChat, setActiveChat] = useState('Document Analysis H...');
  const [message, setMessage] = useState('');

  const recentChats = [
    {
      id: 1,
      title: 'Document Analysis H...',
      snippet: 'How can I analyze my PDF...',
      timeAgo: '1h ago',
      isActive: true
    },
    {
      id: 2,
      title: 'Contract Review',
      snippet: 'Can you help me review th...',
      timeAgo: '3h ago',
      isActive: false
    },
    {
      id: 3,
      title: 'Research Paper Sum...',
      snippet: 'I need help summarizing r...',
      timeAgo: '1d ago',
      isActive: false
    }
  ];

  const chatMessages = [
    {
      id: 1,
      type: 'ai',
      content: "Hello! I'm Coherent, your AI document assistant. Upload a document or ask me anything about document analysis!",
      timestamp: '10:41'
    },
    {
      id: 2,
      type: 'user',
      content: 'How can I analyze my PDF documents?',
      timestamp: '10:46'
    },
    {
      id: 3,
      type: 'ai',
      content: "I can help you analyze PDF documents in several ways! You can upload your PDF and I'll extract key insights, summarize content, and answer specific questions about the document.",
      timestamp: '10:46'
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message logic here
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="chat-page">
      {/* Left Sidebar */}
      <div className="sidebar">
        {/* Logo */}
        <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <div className="logo-icon">★</div>
          <span className="logo-text">Coherent</span>
        </div>

        {/* New Chat Button */}
        <button className="new-chat-btn">
          + New Chat
        </button>

        {/* Recent Chats */}
        <div className="recent-chats">
          <h3>RECENT CHATS</h3>
          <div className="chat-list">
            {recentChats.map((chat) => (
              <div 
                key={chat.id} 
                className={`chat-item ${chat.isActive ? 'active' : ''}`}
                onClick={() => setActiveChat(chat.title)}
              >
                <div className="chat-icon">💬</div>
                <div className="chat-info">
                  <div className="chat-title">{chat.title}</div>
                  <div className="chat-snippet">{chat.snippet}</div>
                  <div className="chat-time">{chat.timeAgo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="main-chat">
        {/* Header */}
        <div className="chat-header">
          <div className="header-left">
            <div className="header-icon">★</div>
            <div className="header-info">
              <h1>Coherent AI Assistant</h1>
              <p>Your intelligent document companion.</p>
            </div>
          </div>
          <div className="header-buttons">
            <button className="login-btn" onClick={handleLogin}>Login</button>
            <button className="signup-btn" onClick={handleSignup}>Signup</button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          {chatMessages.map((msg) => (
            <div key={msg.id} className={`message ${msg.type}`}>
              <div className="message-content">
                {msg.content}
              </div>
              <div className="message-time">{msg.timestamp}</div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="chat-input">
          <button className="attach-btn">+</button>
          <input
            type="text"
            placeholder="Ask me about your documents..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="message-input"
          />
          <button 
            className="send-btn"
            onClick={handleSendMessage}
          >
            ✈️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage; 