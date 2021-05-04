import React from "react";
import "./style.css";
import { Social } from "./Social";

export const Footer = () => {
  return (
    <div className="footer">
      <Social />
      <div className="copyright">
        <h3>
          COPYRIGHT©2021 <p>UNNAT MITTAL</p> RIGHTS RESERVED
        </h3>
      </div>
    </div>
  );
};
