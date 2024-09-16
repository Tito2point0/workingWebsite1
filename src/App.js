// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs'; // Placeholder for other pages
import Advertisement  from './components/Advert'
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ads" element={<Advertisement />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {Array.from({ length: 5 }, (_, i) => (
          <Route key={i} path={`/placeholder${i + 1}`} element={<div>Placeholder Page {i + 1}</div>} />
        ))}
      
      </Routes>
    </Router>
  );
}

export default App;
