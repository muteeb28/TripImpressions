import React from 'react';
import './App.css';
import Header from './components/Header';
import backgroundVideo from './assets/back.mp4';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
       
        <div className="video-container">
          <video autoPlay muted loop className="background-video">
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>
        <div className="content-placeholder">
          <h1>Welcome to TripImpression</h1>
          <p>Discover amazing travel experiences with us.</p>
          
          {/* Action Buttons */}
          <div className="action-buttons">
            <a href="/book-vehicle" className="btn btn-primary">Book Vehicle</a>
            <a href="/view-packages" className="btn btn-secondary">Explore Packages</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;