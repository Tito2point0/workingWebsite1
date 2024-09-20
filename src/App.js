// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import Advertisement from './components/Advert';
import SearchPage from './components/SearchPage'; // Fixed the import statement

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ads" element={<Advertisement />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/search" element={<SearchPage />} /> {/* Added search page */}
      </Routes>
    </Router>
  );
}

export default App;
