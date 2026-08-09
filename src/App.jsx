import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1 className="landing-title">Paradise Nursery</h1>
            <div className="divider"></div>
            <p className="landing-slogan">
              Where Greenery Meets Serenity & Indoor Botanical Bliss
            </p>
            
            <button 
              className="get-started-btn" 
              onClick={handleGetStartedClick}
            >
              Get Started 🌿
            </button>

            {/* About Us section included on the Paradise Nursery Landing Page */}
            <AboutUs />
          </div>
        </div>
      ) : (
        <ProductList onHomeClick={handleHomeClick} />
      )}
    </div>
  );
}

export default App;