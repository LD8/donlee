import React, { useState, useEffect } from "react";
import { Showcase } from "./Showcase";
import { useParams } from "react-router-dom";
import { APIBASE } from "../Const";
import { Loading } from "../Loading";

export const ShowcaseLabelQ = ({ url }) => {
  const { id: paramId } = useParams();

  const [showcases, setShowcases] = useState([]);

  const [placeHolder, setPlaceHolder] = useState(<Loading />);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`${APIBASE}/showcases/labels/${paramId}`)
      .then((response) =>
        response.status > 400
          ? setPlaceHolder(
              `Something went wrong! Fetch Response ${response.status}`
            )
          : response.json()
      )
      .then((data) => {
        setShowcases(data);
        setLoaded(true);
      })
      .catch((error) => console.log(error));
  }, [paramId]);

  return loaded ? (
    <>
      {showcases.map((showcase) => (
        <Showcase key={showcase.id} showcase={showcase} url={url} />
      ))}
    </>
  ) : (
    placeHolder
  );
};
