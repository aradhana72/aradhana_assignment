// NavBar.js
import React from 'react';
import './footer.css';
import { PiWalletFill } from 'react-icons/pi';
import { FaCompass } from 'react-icons/fa';
import { BsBellFill } from 'react-icons/bs';
import { RiSettings3Fill } from 'react-icons/ri';
import '../index.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="flex-item greyCol"><PiWalletFill size={25} /></div>
      <div className="flex-item greyCol"><FaCompass size={25} /></div>
      <div className="flex-item greyCol"><BsBellFill size={25} /></div>
      <div className="flex-item greyCol"><RiSettings3Fill size={25} /></div>
    </div>
  );
};

export default Footer;
