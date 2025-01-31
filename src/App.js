import React from 'react';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import TypesSection from './components/TypesSection';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar Component */}
      <NavigationBar />

      {/* Hero Section Component */}
      <HeroSection />

      {/* Types Section Component */}
      <TypesSection />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
