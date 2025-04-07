import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-zinc-950 text-white px-4 py-2 flex flex-col items-center gap-0">
       <div className="flex gap-6">
        <a
          href="https://github.com/bhupesh227"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 text-2xl hover:text-yellow-100"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/shadows_of_wonder"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 text-2xl hover:text-yellow-100"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/bhupesh-bora-2b4s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 text-2xl hover:text-yellow-100"
        >
          <FaLinkedin />
        </a>
      </div>
      <h1 className="md:text-xl text-lg font-semibold">&copy; 2025, Made By Bhupesh Bora</h1>
     
    </div>
  );
};

export default Footer;