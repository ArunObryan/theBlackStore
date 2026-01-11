import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Browsing from './pages/Browsing';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse/:gender/:category" element={<Browsing />} />
        <Route path="/browse/:gender" element={<Browsing />} />
      </Routes>
    </Router>
  );
}

export default App;

