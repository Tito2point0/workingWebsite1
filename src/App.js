import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUs from './pages/ContactUs';
import Advertisement from './components/Advert';
import SearchPage from './components/SearchPage';
import ThemeToggle from './components/ThemeToggle'; 
import GlobalStyle from './components/createGlobalStyle'; // Import Global Styles

function App() {
  const [darkMode, setDarkMode] = useState(false); // Control dark mode globally

  return (
    <Router>
      <div>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} /> {/* Toggle component */}
        <GlobalStyle darkMode={darkMode} /> {/* Apply Global Styles */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ads" element={<Advertisement />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;