import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; // Import the HeroSection component

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        {/* You can add other sections like Features, FAQ, Footer, etc. here */}
      </main>
    </>
  );
};

export default App;
