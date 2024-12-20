import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Team from './components/Team';
import Newsletter from './components/Newsletter';
import Volunteer from './components/Volunteer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Team />
      <Newsletter />
      <Volunteer />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;