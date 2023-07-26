import React from 'react';
import "./mainBody.css";
import "../index.css";
import {BiSolidDollarCircle} from "react-icons/bi";

const SectionThree = () => {
  return (
    <div className="cardsContainer">
      <div className="card">
        <BiSolidDollarCircle size={44} style={{ color: "#19a3f7" }}  />
        <p>Buy BTC</p>
      </div>
      <div className="card">
      <BiSolidDollarCircle size={44} style={{ color: "#f7578d" }}  />
        <p>Sell BTC</p>
      </div>
    </div>
  );
};

export default SectionThree;
