import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/chat');
  };

  return (
    <section
      id="home"
      className="h-screen bg-gray-50 flex flex-col justify-center items-center text-center px-4"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
        Welcome to{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
          Coherent
        </span>
      </h1>

      <p className="text-gray-600 mt-4 text-lg max-w-xl">
        Your intelligent bridge between complex documents and clear decision
      </p>

      <button 
        onClick={handleGetStarted}
        className="mt-8 px-6 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:opacity-90 transition-all duration-200 hover:scale-105"
      >
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
