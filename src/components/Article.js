import React from "react";
import Loadable from "react-loadable";
import { catPropsName } from "../Utilites/catPropsName";

const { subCatNum, name } = catPropsName;

const Article = ({ subCatProps }) => {
  const catName = subCatProps[name];
  const number = subCatProps[subCatNum];

  const LoadableComponent = Loadable({
    loader: () =>
      fakeDelay(200).then(() => import("../Content/" + catName + number)),
    loading: Loading
  });

  return (
    <div className="ContentColumn">
      <LoadableComponent catName={catName} />
    </div>
  );
};

const Loading = ({ isLoading, pastDelay, error }) => {
  if (isLoading && pastDelay) {
    return <p>Loading...</p>;
  } else if (error && !isLoading) {
    return <p>Error!</p>;
  } else {
    return null;
  }
};

const fakeDelay = ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

export default Article;
