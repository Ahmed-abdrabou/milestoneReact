import React, { useState, useEffect } from "react";

import "./HeaderSection.css";

const HeaderSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start the animation after the component mounts
    setAnimate(true);
  }, []);
  const text = "Welcome To";
  const characters = Array.from(text);
  const text2 = "MileStone";
  const characters2 = Array.from(text2);
  return (
    <div className="mainPage">
      <video autoPlay muted loop className="mainPage_page_video">
        <source src="./sources/mainVideo.mp4" type="video/mp4" />
      </video>

      <div className="navBar">
        <div className="logo">
          <img src="./sources/Logo3PNG.png" alt="logo" />
          {/* <img src="./sources/Logo3JEPG.jpg" alt="logo" /> */}
        </div>
        <div className="links">
          <ul>
            <li>
              <div>Home</div>
            </li>
            <li>
              <div>Our Story</div>
            </li>
            <li>
              <div>Projects</div>
            </li>
            <li>
              <div>
                <li>Contacts</li>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="landingSection">
        <div className="socialMediaIcons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <div className="Header">
          {/* <h1>
            Building Your Dream Home, Is Our <span> MileStone </span> Of Sucess.
          </h1>
          <span className="customButtom ">Call Us Now..</span> */}
          <div class="drop-main">
            {characters.map((char, index) => (
              <div
                key={index}
                style={{
                  opacity: 0,
                  animation: `drop 1s linear forwards ${index * 0.1}s `,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </div>
            ))}
          </div>
          <span className="mileStone flip-main">
            {characters2.map((char, index) => (
              <div
                className="flip-card"
                key={index}
                style={{
                  opacity: 0,
                  // animation: `drop 0.4s linear forwards ${index * 0.1}s `,
                  animation: `flip 1s linear ${index * 0.1}s forwards`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </div>
            ))}
          </span>
          <span
            className="description"
            style={{
              opacity: 0,
              animation: `slidUp 1s linear forwards `,
            }}
          >
            "Building Your Dreams, Is Our <span> MileStone </span> Of Sucess."
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
