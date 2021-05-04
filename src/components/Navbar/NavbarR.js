import React from "react";
import "./style.css";

export const NavbarR = () => {
  return (
    <header className="header">
      <div className="right">
        <a href="#home">
          <span className="right-e">Home</span>
        </a>
        <a href="#about">
          <span className="right-e">About</span>
        </a>
        <a href="#projects">
          <span className="right-e">Projects</span>
        </a>
        <a href="#contact">
          <span className="right-e">Contact</span>
        </a>
      </div>
    </header>
  );
};
