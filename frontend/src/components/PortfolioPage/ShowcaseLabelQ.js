import React from "react";
import { Showcase } from "./Showcase";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading";

export const ShowcaseLabelQ = ({ showcases, url }) => {
  const { slug } = useParams();
  const filteredShowcases = showcases.filter((showcase) =>
    showcase.labels.map(t=>t.toLowerCase()).includes(slug)
  );

  return filteredShowcases ? (
    <>
      {filteredShowcases.map((showcase) => (
        <Showcase key={showcase.id} showcase={showcase} url={url} />
      ))}
    </>
  ) : (
    <Loading />
  );
};
