import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="dev-info">
          <span className="devInfo-containers">
            Facebook : <span className="hover-underline">Stanly Lal</span>
          </span>
          <span className="devInfo-containers">
            Location : <span className="hover-underline">Delhi, India</span>
          </span>
          <span className="devInfo-containers">
            Hobbies : <span className="hover-underline">Music, Cooking</span>
          </span>
          <span className="devInfo-containers">
            E-mail :{" "}
            <span className="hover-underline">stanlylal17@gmail.com</span>
          </span>
        </div>
        <div className="rights-section">
          <div className="rights-container">
            <p className="developer-name">Designed by Stanly</p>
            <p className="rights-disclaimer">All Rights Reserved®</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
