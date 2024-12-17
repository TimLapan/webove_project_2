import React from "react";
import { Link } from "react-router-dom";

const MaterialCard = ({ link, image, altText, overlayText }) => (
  <div className="col-md-6 mb-4">
    <Link to={link} className="material-card">
      <img src={image} alt={altText} />
      <div className="overlay">
        <div className="text">{overlayText}</div>
      </div>
    </Link>
  </div>
);

export default MaterialCard;
