import React from "react";

export const Experience = ({ experience }) => {
  const {
    company,
    year,
    website,
    position,
    description,
    bullets,
    ending,
  } = experience;

  return (
    <div className="sub-container">
      <div className="aside">
        <p className="company-name">{company}</p>
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
        <h4>{position}</h4>
        <p>{description && description}</p>
        <ul>
          {bullets && bullets.map((b, index) => <li key={index}>{b}</li>)}
        </ul>
        <p>{ending && ending}</p>
      </div>
    </div>
  );
};

