import React from "react";
import PageCaption from "./PageCaption";
import PropTypes from "prop-types";
import { catPropsName } from "../Utilites/catPropsName";
import PhotoViewer from "./PhotoViewer";

const { caption, isTileGrid, isPhotoAlbum } = catPropsName;

const selectingType = subCatProps => {
  if (subCatProps[isPhotoAlbum] === "1")
    return <PhotoViewer subCatProps={subCatProps} />;
  return "SubCategory";
};

const SubCategory = ({ subCatProps, catName }) => {
  return (
    <div className="col-xl-12 col-lg-9 col-md-9 col-sm-9 ContentBlock">
      <PageCaption caption={subCatProps[caption]} />
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-gutters">
        {selectingType(subCatProps)}
      </div>
    </div>
  );
};

export default SubCategory;
