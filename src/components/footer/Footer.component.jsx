import React from "react";

import "./Footer.styles.scss";

const Footer = () => (
  <div className="footer">
    <p className="copy-right">© Copyright 2021 Get It Done</p>
    <div className="icon-container">
      <i class="fab fa-facebook-square footer-icon"></i>
      <i class="fab fa-instagram-square footer-icon"></i>
      <i class="fab fa-twitter-square footer-icon"></i>
      <i class="fas fa-envelope-square footer-icon"></i>
    </div>
  </div>
);

export default Footer;