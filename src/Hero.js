import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Popular Movie Title</h1>
        <p>Watch your favorite shows and movies anytime, anywhere.</p>
        <div className="buttons">
          <button className="play-btn">▶ Play</button>
          <button className="info-btn">ℹ More Info</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
