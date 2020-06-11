import React from "react";

const Footer = () => (
  <footer
    className="footer"
    style={{
      textAlign: "center",
      fontSize: 14,
      padding: "0.7rem 2rem",
    }}
  >
    <h5>Contact Keeper</h5>
    <p>
      {new Date().toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p>
  </footer>
);
export default Footer;
