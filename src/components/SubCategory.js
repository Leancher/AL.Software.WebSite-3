import React from "react";
import PageCaption from "./PageCaption";
import PropTypes from "prop-types";
import { catPropsName } from "../Utilites/catPropsName";
import PhotoViewer from "./PhotoViewer";
import Article from "./Article";

const { caption, isPhotoAlbum, isArticle, subCatNum } = catPropsName;

const selectingType = subCatProps => {
  console.log("selectingType subCatNum");
  console.log(subCatProps[subCatNum]);
  if (subCatProps[isPhotoAlbum] === "1") {
    return <PhotoViewer subCatProps={subCatProps} />;
  }
  if (subCatProps[isArticle] === "1") {
    return <Article subCatProps={subCatProps} />;
  }
  return "SubCategory";
};

const SubCategory = ({ subCatProps }) => {
  return (
    <div className="col-xl-12 col-lg-9 col-md-9 col-sm-9 ContentBlock">
      <PageCaption caption={subCatProps[caption]} />
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-gutters">
        {selectingType(subCatProps)}
      </div>
    </div>
  );
};

SubCategory.prototypes = {
  subCatProps: PropTypes.object.isRequired
};

export default SubCategory;
