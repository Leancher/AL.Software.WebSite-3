import React from "react";
//import PropTypes from "prop-types";
import { catPropsName } from "../Utilites/catPropsName";

const PhotoGrid = ({ photosList, catName, subCatNum, buttonHandler }) => {
  if (photosList === "") return "В этом альбоме нет картинок";

  return (
    <div id="Content" className="PhotoPlace">
      {photosList.map((item, index) => {
        const picPath = `./Pictures/${catName}/Album${subCatNum}Preview/${item}`;
        return (
          <div className="PhotoCell" key={index}>
            <img
              id="photo"
              src={picPath}
              alt={item}
              name={index}
              onClick={buttonHandler}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PhotoGrid;
