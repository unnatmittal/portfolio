import React from "react";
import { Item } from "./Item";
import "./style.css";
import saathi from "../../assets/saathi.png";
import cricfantasy from "../../assets/cricfantasy.png";
import extracker from "../../assets/extracker.png";
import corona from "../../assets/corona.png";
import tesla from "../../assets/tesla.png";
import vrikshandolan from "../../assets/vrikshandolan.png";

export const Proj = () => {
  return (
    <div className="project">
      <div className="upper">
        <h1>PROJECTS</h1>
        <div className="line"></div>
      </div>
      <div className="p-items">
        <Item
          head="SAATHI"
          img={saathi}
          link="/"
          para="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet."
        />
        <Item
          head="Cric-Fantasy"
          img={cricfantasy}
          link="https://github.com/unnatmittal/cric-fantasy"
          para="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet."
        />
        <Item
          head="Expense Tracker"
          img={extracker}
          link="https://github.com/unnatmittal/expense-tracker"
          para="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet."
        />
        <Item
          head="Corona Map"
          img={corona}
          link="https://github.com/unnatmittal/coronaMap"
          para="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet."
        />
        <Item
          head="Tesla Clone"
          img={tesla}
          link="https://github.com/unnatmittal/tesla"
          para="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet."
        />
        <Item
          head="Vrikshandolan"
          img={vrikshandolan}
          link="https://vrikshandolan.com/"
          para="There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet."
        />
      </div>
    </div>
  );
};
