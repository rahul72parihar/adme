import React from "react";
import "./Grid.css";

const Grid = ({ imageData }) => {
  return (
    <div className="container">
      <div className="mainImage">
        <img src={imageData[0].download_url} className="imageElement" alt="Logo" />
      </div>
      <div className="topRight">
        <img src={imageData[1].download_url} className="imageElement" alt="Logo" />
      </div>
      <div className="middleRight">
        <img src={imageData[2].download_url} className="imageElement" alt="Logo" />
      </div>
      <div className="bottomLeft">
        <img src={imageData[3].download_url} className="imageElement" alt="Logo" />
      </div>
      <div className="bottomRight">
        <img src={imageData[4].download_url} className="imageElement" alt="Logo" />
      </div>
    </div>
  );
};

export default Grid;
