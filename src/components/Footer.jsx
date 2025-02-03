import React from "react";

function getYear() {
  const date = new Date();
  return date.getFullYear();
}

function Footer() {
  return (
    <footer>
      <p>Copyright {getYear()}</p>
    </footer>
  );
}

export default Footer;
