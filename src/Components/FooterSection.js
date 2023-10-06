import React from "react";

import "./FooterSection.css";

const FooterSection = () => {
  return (
    <div className="footer">
      <div className="section_container">
        <div className="FooterContactUs">
          <div className="contact">
            <i className="fa-solid fa-phone"></i>
            <p>0100155355</p>
          </div>
          <div className="contact">
            <i className="fa-solid fa-envelope"></i>
            <p>Mile.Stone.Co.Egy@gmail.com</p>
          </div>
          <div className="contact">
            <i className="fa-solid fa-map-location-dot"></i>
            <p>6 October City, Egypt</p>
          </div>
        </div>
        <div className="FooterSocialMediaIcons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-youtube"></i>
        </div>
        <div className="FooterCopyright">
          <span>All Rights Reserved MileStone© 2023</span>
          <span>Developed By FoxCode Technology</span>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
