// App.js
import React from 'react';
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import FeatureSection from './components/FeatureSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="antialiased text-gray-800">
      <Header />
      <ServicesSection />
      <FeatureSection />
      <div class="container mx-auto px-4 py-8 mb-12">
      <div class="flex flex-wrap -mx-4">
      <FAQSection />
      <ContactSection />
      </div>
      </div>
      <MapSection />
      <Footer />
    </div>
    
    
  );
};

export default App;
