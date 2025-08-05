import React from 'react';
import Navbar from './components/Navbar.jsx';
import CardSection from './components/CardSection.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import EventTabs from './components/EventTabs.jsx';

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <CardSection />
      <EventTabs />
      <Footer />
    </div>
  );
};

export default App;
