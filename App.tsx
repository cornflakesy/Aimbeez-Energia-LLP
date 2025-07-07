import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Contact from './pages/Contact';
import TextCursor from './components/TextCursor';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <TextCursor text="⚡" delay={0.01} spacing={80} followMouseDirection={true} randomFloat={true} exitDuration={0.3} removalInterval={20} maxPoints={10} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;