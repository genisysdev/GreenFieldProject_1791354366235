import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} E-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
