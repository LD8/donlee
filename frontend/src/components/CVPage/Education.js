import React from "react";

export const Education = ({ education }) => {
  const { year, certificate, institution, website, location } = education;
  return (
    <div className="sub-container">
      <div className="aside">
        <p className="year">{year}</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`http://www.${website}`}
        >
          {website}
        </a>
      </div>
      <div className="details">
        <h4>{certificate}</h4>
        <p>{institution}</p>
        <h6>{location}</h6>
      </div>
    </div>
  );
};
