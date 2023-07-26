import React from 'react';
import './mainBody.css';
import { MdArrowBackIosNew } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import '../index.css';
import SectionOne from './sectionOne';
import Tabs from './tabs';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';
const MainBody = () => {
  return (
    <div className="mainBody">
      <SectionOne />
      <Tabs />
      <SectionThree />
    </div>
  );
};

export default MainBody;
