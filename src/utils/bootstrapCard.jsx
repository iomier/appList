import React from "react";
import { Link } from "react-router-dom";

function bootstrapCard({ header, text, link }) {
  return (
    <div className="card mt-2">
      <h5 className="card-header">{header}</h5>
      <div className="card-body">
        <p className="card-text">{text}</p>
        <Link to={link} className="btn btn-primary">
          Go to APP
        </Link>
      </div>
    </div>
  );
}

export default bootstrapCard;
