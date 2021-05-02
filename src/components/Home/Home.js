import React from "react";
import "./style.css";
import { HomeL } from "./HomeL";
import { HomeR } from "./HomeR";

export const Home = () => {
  return (
    <div className="home">
      <HomeL />
      <HomeR />
    </div>
  );
};
