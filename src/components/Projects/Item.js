import React from "react";
import "./style.css";

import "mdb-react-ui-kit/dist/css/mdb.min.css";

export const Item = (props) => {
  return (
    <div className="item">
      <div className="pic">
        <div className="bg-image hover-overlay hover-zoom hover-shadow ripple">
          <img src={props.img} className="i-pic" alt="no" />
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(16, 42, 66, 0.25)" }}
            ></div>
          </a>
        </div>
      </div>
      <div className="data">
        <h2>{props.head}</h2>
        <p>{props.para}</p>
      </div>
    </div>
  );
};
