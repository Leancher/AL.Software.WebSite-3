import React from "react";
import PropTypes from "prop-types";
import PageCaption from "./PageCaption";
import BuildTileGrid from "./TileGrid";
import MyNotes from "./MyNotes";
import { catPropsName } from "../Utilites/catPropsName";

const { caption, isTileGrid } = catPropsName;

const defineContent = (catNum, curCatProps, subCatsList) => {
  if (curCatProps[isTileGrid] === "1") {
    return <BuildTileGrid catNum={catNum} subCatsList={subCatsList} />;
  }
  if (catNum === "7") {
    return <MyNotes />;
  }
  return "currentCategory";
};

const SubCatsList = ({ catNum, curCatProps, subCatsList }) => {
  return (
    <div className="col-xl-12 col-lg-9 col-md-9 col-sm-9 ContentBlock">
      <PageCaption caption={curCatProps[caption]} />
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-gutters">
        {defineContent(catNum, curCatProps, subCatsList)}
      </div>
    </div>
  );
};

SubCatsList.prototypes = {
  catNum: PropTypes.string.isRequired,
  curCatProps: PropTypes.object.isRequired,
  subCatsList: PropTypes.array.isRequired
};

export default SubCatsList;
