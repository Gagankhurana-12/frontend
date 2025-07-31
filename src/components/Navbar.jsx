import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleScrollNav = (sectionId) => {
    if (window.location.pathname === "/") {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate("/", { state: { scrollTo: sectionId }, replace: true });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img
          src="https://img.icons8.com/fluency/48/000000/sparkling.png"
          alt="logo"
          className="h-6 w-6"
        />
        <span className="text-xl font-bold text-gray-900">Coherent</span>
      </div>

      <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
        <button onClick={() => handleScrollNav("home")} className="hover:text-blue-600">Home</button>
        <button onClick={() => handleScrollNav("solutions")} className="hover:text-blue-600">Solutions</button>
        <button onClick={() => handleScrollNav("developers")} className="hover:text-blue-600">Developers</button>
        <button onClick={() => handleScrollNav("faq")} className="hover:text-blue-600">FAQ</button>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/login" className="text-gray-800 hover:text-blue-600">Login</Link>
        <Link
          to="/signup"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md font-semibold shadow hover:opacity-90"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
