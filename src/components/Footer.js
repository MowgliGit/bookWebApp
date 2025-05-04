import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <p className="footerLogo">📚 One Click to Your Next Book</p>
        <p className="footerText">
          &copy; {new Date().getFullYear()} BookWeb 📚 All rights reserved
          Mowgli.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
