import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Contact Section */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Contact Us</h2>
          <p>Email: support@visanavigator.com</p>
          <p>Phone: +123-456-7890</p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-5 mb-4 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-500" />
          </a>
          <a href="https://x.com/home?lang=en" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-700" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
        </div>
      </div>

      {/* Footer Rights */}
      <div>
        <p className="text-center mt-10">
          © {new Date().getFullYear()} Visa Navigator. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
