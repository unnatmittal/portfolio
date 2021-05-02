import React from "react";
import { NavbarL } from "../Navbar/NavbarL";
import { NavbarR } from "../Navbar/NavbarR";
import "./style.css";
import hdp from "../../assets/hdp.jpeg";
import Typed from "react-typed";

export const HomeL = () => {
  return (
    <div className="home-l">
      <NavbarL />
      <div className="outer-box">
        <div className="box">
          <div className="underline"></div>
          <h1 className="heading">
            I'm <p>Unnat Mittal</p>
          </h1>
          <Typed
            className="typed"
            strings={[
              "Web Design",
              "Web Development",
              "App Development",
              "Data Structures",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>
      </div>
    </div>
  );
};
