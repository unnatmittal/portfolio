import React from "react";
import { NavbarR } from "../Navbar/NavbarR";
import "./style.css";
import hdp from "../../assets/hdp.jpeg";

export const HomeR = () => {
  return (
    <div className="home-r">
      <NavbarR />
      <div className="box-r">
        <div className="hdp-box">
          <img src={hdp} alt="hdp" className="hdp" />
        </div>

        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="svg"
        >
          <path
            fill="#2CAEBA"
            d="M50,-39.7C60.5,-26.8,61.6,-6.2,58.9,16.6C56.2,39.4,49.7,64.5,34.8,71.2C19.9,78,-3.3,66.5,-24,54.6C-44.7,42.8,-63,30.7,-71.5,11.3C-80,-8.2,-78.6,-34.9,-65.1,-48.5C-51.5,-62.1,-25.8,-62.6,-3,-60.2C19.8,-57.8,39.5,-52.6,50,-39.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
};
