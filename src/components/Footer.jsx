import React from "react";
import { githubLogo, linkedinLogo, mediumLogo } from '../assets'; // Update the path if necessary

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/VanditGupta" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/vandit-gupta/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a href="https://medium.com/@vanditgupta22" target="_blank" rel="noopener noreferrer">
            <img src={mediumLogo} alt="Medium" className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm">
          © {new Date().getFullYear()} Vandit Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;