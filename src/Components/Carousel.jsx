/** @format */

import React from 'react';

function Hero() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./images/piz1.webp" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./images/piz5.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./images/piz8.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./images/piz9.jpeg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./images/piz10.jpeg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./images/piz7.jpeg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="./images/piz4.jpeg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-target="#carouselExampleControls"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}

export default Hero;
