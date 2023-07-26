// NavBar.js
import React, {useState, useEffect} from 'react';
import './navbar.css';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {BiInfoSquare} from "react-icons/bi";
import {CgEditFlipH} from "react-icons/cg";
import {GoShare} from "react-icons/go";
import {IoMdRemoveCircleOutline} from "react-icons/io";

import '../index.css';

const NavBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalIsOpen && !event.target.closest('.modal-content')) {
        handleCloseModal();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [modalIsOpen]);

  return (
  <>
  {modalIsOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className='innerContentFlex'>
            <span>Edit</span>
            <CgEditFlipH />
            </div>
            <hr></hr>
            <div className='innerContentFlex'>
            <span>Courier info </span>
            <BiInfoSquare />
            </div>
            <hr></hr>
            <div className='innerContentFlex'>
            <span>Share</span>
            <GoShare />
            </div>
            <hr></hr>
            <div className='innerContentFlex redCol'>
            <span>Remove</span>
            <IoMdRemoveCircleOutline />
            </div>
           
          </div>
        </div>
      )}
    <nav className="navbar">
      <div className="flex-item greyCol"><MdArrowBackIosNew /></div>
      <div className="flex-item blackCol">Bitcoin Wallet</div>
      <div className="flex-item greyCol"><BsThreeDotsVertical onClick={handleOpenModal} /></div>
    </nav>
    </>
  );
};

export default NavBar;
