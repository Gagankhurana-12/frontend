import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const promptCards = [
  "What's the upper age limit for orthopedic claim eligibility?",
  'Can I claim expenses for a minor fracture treated in an OPD?',
  'Find all clauses related to cancer treatment.'
];

const ChatPage = () => {
  const navigate = useNavigate();
  const [activeChat, setActiveChat] = useState('Document Analysis H...');
  const [message, setMessage] = useState('');
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  // Removed sidebarCollapsed state
  const attachBtnRef = useRef(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const inputRef = useRef(null);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    // Show welcome message when component mounts
    setShowWelcome(true);
  }, []);

  const handlePromptClick = (text) => {
    setMessage(text);
    setShowWelcome(false);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 50);
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
    if (showWelcome) setShowWelcome(false);
  };

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

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMsg = {
        id: Date.now(),
        type: 'user',
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages((prev) => [
        ...prev,
        newMsg,
        {
          id: Date.now() + 1,
          type: 'ai',
          content: 'This is a dummy response from MIRA.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setMessage('');
      setShowWelcome(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
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

  const handleAttachClick = () => {
    setShowAttachMenu((prev) => !prev);
  };

  const handleAttachMenuBlur = (e) => {
    if (
      attachBtnRef.current &&
      !attachBtnRef.current.contains(e.relatedTarget)
    ) {
      setShowAttachMenu(false);
    }
  };

  return (
    <div className="chat-page flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="sidebar bg-white border-r border-gray-200 flex flex-col justify-between transition-all duration-300 min-w-[400px] w-[400px] p-5 relative">
        <div className="flex flex-col gap-6">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 mb-2 cursor-pointer" onClick={handleLogoClick}>
            <div className="logo-icon w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
              {/* Star SVG icon */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900">MIRA</span>
              <span className="text-xs text-gray-500">AI Assistant</span>
            </div>
          </div>
          {/* New Chat Button */}
          <button
            className="new-chat-btn w-full bg-gradient-to-r from-blue-600 to-purple-400 text-white font-semibold py-2 rounded-lg shadow hover:from-purple-700 hover:to-purple-400 transition-colors duration-200 mb-2"
            onClick={() => {
              setChatMessages([]);
              setShowWelcome(true);
              setActiveChat('');
            }}
          >
            + New Chat
          </button>
          {/* Recent Chats */}
          <div className="recent-chats mt-2">
            <h3 className="text-xs font-semibold text-gray-500 mb-2">RECENT CHATS</h3>
            <div className="chat-list flex flex-col gap-1">
              {recentChats.map((chat) => (
                <button
                  key={chat.id}
                  className={`chat-item flex items-center gap-2 px-2 py-2 rounded-lg text-left transition-colors duration-150 ${activeChat === chat.title ? 'bg-purple-100 border border-purple-300' : 'hover:bg-gray-100'} `}
                  onClick={() => {
                    setActiveChat(chat.title);
                    setShowWelcome(false);
                    setChatMessages([
                      {
                        id: Date.now(),
                        type: 'ai',
                        content: 'This is a dummy response from MIRA.',
                        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      }
                    ]);
                  }}
                >
                  <div className="chat-icon w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center text-gray-600 text-lg">💬</div>
                  <div className="flex flex-col flex-1">
                    <div className="chat-title font-medium text-sm truncate">{chat.title}</div>
                    <div className="chat-snippet text-xs text-gray-500 truncate">{chat.snippet}</div>
                  </div>
                  <div className="chat-time text-xs text-gray-400 ml-2">{chat.timeAgo}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* User Section at Bottom */}
        <div className="user-section flex items-center gap-3 p-2 border-t border-gray-100 mt-4">
          <div className="user-avatar w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg">U</div>
          <div className="flex flex-col flex-1">
            <span className="user-name text-sm font-semibold text-gray-900">User</span>
            <span className="user-email text-xs text-gray-500">user@example.com</span>
          </div>
          <button
            className="logout-btn text-xs text-gray-500 hover:text-purple-700 font-semibold px-2 py-1 rounded transition-colors duration-150"
            onClick={handleLogin}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="main-chat flex-1 flex flex-col bg-white min-w-0 w-full transition-all duration-300 overflow-x-hidden">
        {/* Header - Modern Redesign */}
        <header className="chat-header w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm border-b border-gray-100" style={{ minHeight: '72px' }}>
          {/* Left Branding */}
          <div className="flex items-center gap-4">
            <div className="header-logo w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
              {/* Star SVG icon */}
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-2xl text-gray-900 leading-tight" style={{ letterSpacing: '0.01em' }}>MIRA AI Assistant</span>
              <span className="text-sm text-gray-400 mt-1">Your intelligent document companion</span>
            </div>
          </div>
          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              className="export-btn flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-5 py-2 shadow transition-colors duration-150"
              style={{ borderRadius: '8px' }}
            >
              {/* PDF Icon */}
              <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="4" y="2" width="16" height="20" rx="4"/>
                <path d="M8 6h8M8 10h8M8 14h4"/>
              </svg>
              Export to PDF
            </button>
          </div>
        </header>

        {/* Chat Messages */}
        <div className="chat-messages flex-1 p-8 overflow-y-auto flex flex-col gap-5">
          {showWelcome ? (
            <div className="welcome-section flex flex-col items-center justify-center h-full">
              {/* Centered logo above greeting */}
              <div className="mb-6">
                <div className="mx-auto w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center">
                  {/* Example logo icon, replace with your SVG if needed */}
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M9 9h6v6H9z"/></svg>
                </div>
              </div>
              {/* Greeting message */}
              <div className="welcome-title text-4xl font-extrabold text-blue-700 mb-2 text-center">Hi there, <span className="text-blue-500">Chotu</span></div>
              <div className="welcome-subtext text-lg text-gray-500 mb-8 text-center">How can I help you today?</div>
              {/* Prompt cards in boxes */}
              <div className="prompt-cards-row flex flex-row gap-6 justify-center w-full max-w-3xl">
                {promptCards.map((text, idx) => (
                  <button
                    className="prompt-card bg-white border border-blue-100 rounded-xl shadow-sm px-6 py-5 text-gray-700 font-medium text-base cursor-pointer hover:bg-blue-50 transition-colors duration-200 flex-1"
                    key={idx}
                    onClick={() => handlePromptClick(text)}
                  >
                    {text}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {chatMessages.map((msg) => (
            <div
              key={msg.id}
              className={`message flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${msg.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-blue-100'}`}
              >
                <div className="message-content">
                  {msg.content}
                </div>
                <div className={`message-time text-xs mt-1 ${msg.type === 'user' ? 'text-blue-200' : 'text-blue-400'}`}>
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="chatbox-bottom-bar fixed bottom-12 z-30 flex justify-center items-center pointer-events-none w-full">
          <div className="flex w-full justify-center">
            <div className="chatbox-input-wrap bg-transparent border border-blue-200 rounded-full shadow flex items-center relative pointer-events-auto w-[800px] h-[90px] max-w-[98vw] px-6" style={{ marginLeft: '-400px' }}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Ask me anything..."
                value={message}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="flex-1 border-none outline-none bg-transparent text-base px-6 py-5 rounded-full text-gray-900 min-w-0"
              />
              {/* Icons group: perfectly centered, equal spacing, always inside input */}
              <div className={`chatbox-icons-group flex items-center gap-4 transition-all duration-300 absolute right-6 top-1/2 -translate-y-1/2 ${message.trim() ? '-translate-x-16' : ''}`}> 
                <div className="icon-wrapper relative flex items-center justify-center" tabIndex={0} ref={attachBtnRef} onBlur={handleAttachMenuBlur}>
                  <button
                    className="icon-btn attach-btn bg-transparent border-none text-blue-500 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-lg hover:bg-blue-100 hover:text-blue-700"
                    onClick={handleAttachClick}
                    title="Attach file"
                    type="button"
                  >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M21.44 11.05l-9.19 9.19a5 5 0 0 1-7.07-7.07l10.6-10.6a3 3 0 0 1 4.24 4.24l-10.6 10.6a1 1 0 0 1-1.42-1.42l9.19-9.19"/>
                    </svg>
                  </button>
                  <span className="tooltip absolute bg-blue-900 text-white text-xs rounded px-2 py-1 top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none">Attach file</span>
                  {showAttachMenu && (
                    <div className="attach-menu absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white border border-blue-200 rounded-lg shadow min-w-[160px] z-20 flex flex-col p-1 animate-fadeInMenu">
                      <label className="attach-menu-item bg-none border-none text-left px-4 py-2 text-sm text-blue-700 cursor-pointer hover:bg-blue-100 hover:text-blue-700" htmlFor="upload-image">Upload Image
                        <input id="upload-image" type="file" accept="image/*" className="hidden" onChange={e => {
                          if (e.target.files && e.target.files[0]) {
                            // You can handle the uploaded image file here
                            // For now, just log the file name
                            console.log('Image uploaded:', e.target.files[0].name);
                          }
                        }} />
                      </label>
                      <label className="attach-menu-item bg-none border-none text-left px-4 py-2 text-sm text-blue-700 cursor-pointer hover:bg-blue-100 hover:text-blue-700" htmlFor="upload-docx">Upload Docx
                        <input id="upload-docx" type="file" accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" className="hidden" onChange={e => {
                          if (e.target.files && e.target.files[0]) {
                            // You can handle the uploaded docx file here
                            // For now, just log the file name
                            console.log('Docx uploaded:', e.target.files[0].name);
                          }
                        }} />
                      </label>
                    </div>
                  )}
                </div>
                <div className="icon-wrapper relative flex items-center justify-center">
                  <button className="icon-btn mic-btn bg-transparent border-none text-blue-500 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-lg hover:bg-blue-100 hover:text-blue-700" type="button" title="Speech to text">
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <rect x="9" y="2" width="6" height="12" rx="3"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                      <line x1="12" y1="22" x2="12" y2="18"/>
                    </svg>
                  </button>
                  <span className="tooltip absolute bg-blue-900 text-white text-xs rounded px-2 py-1 top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 pointer-events-none">Speech to text</span>
                </div>
                {/* Send button slides in from right when typing */}
                <div className={`send-btn-wrapper flex items-center transition-all duration-300 ${message.trim() ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0 pointer-events-none'}`}>
                  <button
                    className="send-btn bg-gradient-to-r from-blue-600 to-blue-400 border-none text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer text-xl shadow hover:from-blue-700 hover:to-blue-400 hover:scale-105 transition-all duration-200"
                    onClick={handleSendMessage}
                    type="button"
                    tabIndex={message.trim() ? 0 : -1}
                    disabled={!message.trim()}
                  >
                    <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;