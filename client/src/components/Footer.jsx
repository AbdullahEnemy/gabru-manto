import React from "react";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-content mt-16">
        <p>This is part of the Gabru & Manto Project.</p>
        <p> All rights reserved.</p>
      </div>
      <div className="footer-content mt-16">
        <FooterMenu></FooterMenu>
      </div>
      <div id="footer-bottom-bar">
        <h1 className="text-primary">
          <p>GABRU</p>
          <p>& MANTO.</p>
        </h1>
        <h1 className="text-neutral">2024</h1>
        <h1 className="text-accent font-black text-4xl">G&M</h1>
      </div>
    </div>
  );
};

export default Footer;
