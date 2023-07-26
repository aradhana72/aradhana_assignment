// sectionOne.js
import React, {useState} from "react";
import "./mainBody.css";
import "../index.css";
import SectionTwo from "./sectionTwo";
const Tabs = () => {

 
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Page H',
      uv: 4490,
      pv: 2300,
      amt: 3100,
    },
    {
      name: 'Page I',
      uv: 1490,
      pv: 3300,
      amt: 5100,
    },
    {
      name: 'Page J',
      uv: 4090,
      pv: 1000,
      amt: 2231,
    },
  ];

  const data1 = data.slice(0,3);
  const data2 = data.slice(0,6);
  const data3 = data.slice(0,8);

  const [arrayData, setArraydata] = useState(data1);
  const [activeClass, setActiveClass] = useState(1);
  
  return (
    <>
    <br></br>
      <div className="tabsFlex greyText">
        
        <p className={activeClass===1?`statusTab`:``} onClick={()=>{setArraydata(data1); setActiveClass(1)}}>Day</p>
        <p className={activeClass===2?`statusTab`:``}  onClick={()=>{setArraydata(data2); setActiveClass(2)}}>Week</p>
        <p className={activeClass===3?`statusTab`:``}  onClick={()=>{setArraydata(data3); setActiveClass(3)}}>Month</p>
        <p className={activeClass===4?`statusTab`:``}  onClick={()=>{setArraydata(data); setActiveClass(4)}}>Year</p>
        
      </div>
      <br></br>
      <SectionTwo data={arrayData}/>
    </>
  );
};

export default Tabs;
