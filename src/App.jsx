import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import DevelopersSection from './components/DevelopersSection';
import FaqSection from './components/FaqSection';

// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import ChatPage from './pages/ChatPage';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state?.scrollTo;
    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        // Delay ensures DOM is fully rendered
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, [location]);

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center py-24 px-4">
        <Hero />
      </section>
      <section id="solutions" className="min-h-screen py-24 px-4">
        <SolutionsSection />
      </section>
      <section id="developers" className="min-h-screen py-24 px-4">
        <DevelopersSection />
      </section>
      <section id="faq" className="min-h-screen py-24 px-4">
        <FaqSection />
      </section>
    </>
  );
};

function App() {
  // Use useLocation from react-router-dom for correct routing context
  return (
    <Router>
      <AppWithLocation />
    </Router>
  );
}

function AppWithLocation() {
  const location = useLocation();
  const isChatPage = location.pathname === '/chat';
  return (
    <div className="font-sans scroll-smooth bg-gray-50 text-gray-900 min-h-screen">
      {!isChatPage && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
