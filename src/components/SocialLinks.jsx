import React from 'react';
import './SocialLinks.css';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <ul className="social">
      <li>
        <a href="https://instagram.com/tripimpression" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/tripimpression" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://facebook.com/tripimpression" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/company/tripimpression" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://wa.me/7780878886" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;