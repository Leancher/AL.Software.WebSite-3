import React from "react";
import PropTypes from "prop-types";

const PhotoGrid = ({ photosList, pathToPhoto, onClickPhoto }) => {
  if (photosList === "") return "В этом альбоме нет картинок";
  return (
    <div id="Content" className="PhotoGrid">
      {photosList.map((item, index) => {
        const picPath = `${pathToPhoto}Preview/${item}`;
        return (
          <div className="PhotoCell" key={index}>
            <img
              id="photo"
              src={picPath}
              alt={item}
              name={index}
              onClick={onClickPhoto}
            />
          </div>
        );
      })}
    </div>
  );
};

PhotoGrid.prototypes = {
  photosList: PropTypes.array.isRequired,
  pathToPhoto: PropTypes.string.isRequired,
  onClickPhoto: PropTypes.func.isRequired
};

export default PhotoGrid;
