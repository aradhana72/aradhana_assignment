// sectionOne.js
import React from "react";
import "./mainBody.css";
import "../index.css";
import { LineChart, Line } from "recharts";

const SectionTwo = ({data}) => {
  return (
    <>
      <div className="whiteBg upperMargin">
        <div className="cardFlex">
          <div className="upperMargin flexInner">
          <p class="redDot">●</p>
            <p  className="greyText">Lower:$4.895</p>
          </div>
          <div  className="upperMargin flexInner">
          <p class="greenDot">●</p>
            <p className="greyText">Higher:$6.857</p>
          </div>
        </div>

        <LineChart width={300} height={100} data={data}>
      <Line type="monotone" dataKey="pv" stroke="#fd9035" strokeWidth={2} />
    </LineChart>

        <div className="leftMargin">
          <p align="left" className="smallText">1 BTC=$5.483</p>
          <br></br>
        </div>

       
        
      </div>
    </>
  );
};

export default SectionTwo;
