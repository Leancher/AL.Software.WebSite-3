import React from "react";
import PropTypes from "prop-types";
import PageCaption from "./PageCaption";
import BuildTileGrid from "./TileGrid";
import { catPropsName } from "../Utilites/catPropsName";

const { caption, isTileGrid } = catPropsName;

const SubCatsList = ({ catNum, curCatProps, subCatsList }) => {
  return (
    <div className="col-xl-12 col-lg-9 col-md-9 col-sm-9 ContentBlock">
      <PageCaption caption={curCatProps[caption]} />
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-gutters">
        {curCatProps[isTileGrid] === "1" ? (
          <BuildTileGrid catNum={catNum} subCatsList={subCatsList} />
        ) : (
          "currentCategory"
        )}
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
