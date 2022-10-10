import React from "react";

function Banner() {
  return (
    <div className="section-banner">
      <video id="background-video" autoplay loop muted controls>
        <source src={require('./assets/video/example.mp4')} type="video/mp4" />
      </video>
      <div className="container">
        <h1>My Travels</h1>
      </div>
    </div>
  )
}

export default Banner;