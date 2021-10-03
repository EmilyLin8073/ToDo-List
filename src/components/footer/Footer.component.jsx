import React from "react";

import "./Footer.styles.scss";

const Footer = () => (
  <footer className="footer" variant="dark" fixed="bottom">
    <p className="copy-right">© Copyright 2021 Get It Done</p>
    <div className="icon-container">
      <i className="fab fa-facebook-square footer-icon"></i>
      <i className="fab fa-instagram-square footer-icon"></i>
      <i className="fab fa-twitter-square footer-icon"></i>
      <i className="fas fa-envelope-square footer-icon"></i>
    </div>
  </footer>
);

export default Footer;
