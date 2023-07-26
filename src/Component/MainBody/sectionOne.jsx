// sectionOne.js
import React, { useState } from "react";
import "./mainBody.css";
import "../index.css";
import { SiBitcoinsv } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { BiSolidDollarCircle } from "react-icons/bi";

const SectionOne = () => {
  const [activeClass, setActiveClass] = useState(false);
  let activeClassFlag = !activeClass;
  return (
    <>
      <div className="whiteBg">
        <div className="cardFlex marginTopReq">
         
          <div className="flexInner">
            <SiBitcoinsv size={44} style={{ color: "#FFAB35" }} />
            <p>Bitcoin</p>
          </div>
          <div>
            <p className="greyText">BTC</p>
          </div>
        </div>

        <div className="leftMargin largeText marginTopReq">
          <p align="left">3.529020 BTC</p>
        </div>

        <div className="cardFlex" id="mTop">
          <div className="flexInner">
            <p className="greyText">$19.153 USD</p>
          </div>
          <div className="statusLoss">-2.32%</div>
        </div>
        <div
          style={{ display: activeClass === true ? "block" : "none" }}
        >
          <div className="cardsContainer">
            <div>
              <BiSolidDollarCircle size={44} style={{ color: "#19a3f7" }} />
              <p>Buy BTC</p>
            </div>
            <div>
              <BiSolidDollarCircle size={44} style={{ color: "#f7578d" }} />
              <p>Sell BTC</p>
            </div>
          </div>
        </div>
        <div>
          <IoIosArrowDown
            onClick={() => {
              setActiveClass(activeClassFlag);
            }}
            size={35}
            style={{ color: "#adb7c3", marginBottom: "12px" }}
          />
        </div>
      </div>
    </>
  );
};

export default SectionOne;
