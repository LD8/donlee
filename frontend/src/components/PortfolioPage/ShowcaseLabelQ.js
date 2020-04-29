import React, { useState, useEffect } from "react";
import { Showcase } from "./Showcase";
import { useParams } from "react-router-dom";
import { APIBASE } from "../Const";

export const ShowcaseLabelQ = ({ url }) => {
  const { id: paramId } = useParams();

  const [showcases, setShowcases] = useState([]);

  useEffect(() => {
    fetch(`${APIBASE}/showcases/labels/${paramId}`)
      .then((response) => response.json())
      .then((data) => {
        setShowcases(data);
      })
      .catch((error) => console.log(error));
  }, [paramId]);

  return (
    <>
      {showcases.map((showcase) => (
        <Showcase key={showcase.id} showcase={showcase} url={url} />
      ))}
    </>
  );
};
