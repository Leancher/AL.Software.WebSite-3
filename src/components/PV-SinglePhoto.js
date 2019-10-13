import React from "react";
import PropTypes from "prop-types";

const buttons = {
  btPrevEn: "./Pictures/Util/arrowLEn.png",
  btNextEn: "./Pictures/Util/arrowREn.png",
  btPrevDis: "./Pictures/Util/arrowLDis.png",
  btNextDis: "./Pictures/Util/arrowRDis.png",
  btCloseEn: "./Pictures/Util/CloseEn.png",
  btCloseDis: "./Pictures/Util/CloseDis.png",
  btCloseEmpty: "./Pictures/Util/CloseEmpty.png"
};

let curPhotoNum = 0;

const buttonsActivity = (e, mode) => {
  if (e.target.name !== "button") return;
  e.target.src = buttons[`${e.target.id}${mode}`];
};

const clickButton = (event, pathToPhoto, photosList) => {
  const id = event.target.id;
  if (id === "btPrev") {
    curPhotoNum -= 1;
    if (curPhotoNum < 0) curPhotoNum = 0;
  }
  if (id === "btNext") {
    curPhotoNum = Number(curPhotoNum) + 1;
    if (curPhotoNum > photosList.length - 1) curPhotoNum = curPhotoNum - 1;
  }
  const photoPlace = document.getElementById("CurrentPhoto");
  photoPlace.src = `${pathToPhoto}/${photosList[curPhotoNum]}`;
};

const SinglePhoto = ({
  photosList,
  pathToPhoto,
  photoNumber,
  onClickBtClose
}) => {
  curPhotoNum = photoNumber;
  return (
    <div
      className="SlideShow"
      onMouseMove={e => buttonsActivity(e, "En")}
      onMouseOut={e => buttonsActivity(e, "Dis")}
      onClick={event => {
        clickButton(event, pathToPhoto, photosList);
      }}
    >
      <div className="btLeftPlace btPlace">
        <div>
          <img src={buttons.btCloseEmpty} alt="btClose" />
        </div>
        <div className="btPrev">
          <img id="btPrev" src={buttons.btPrevDis} alt="btPrev" name="button" />
        </div>
      </div>
      <div className="PhotoPlace">
        <img
          className="CurrentPhoto"
          id="CurrentPhoto"
          src={`${pathToPhoto}/${photosList[curPhotoNum]}`}
          alt={photosList[curPhotoNum]}
        />
      </div>
      <div className="btRightPlace btPlace">
        <div>
          <img
            id="btClose"
            src={buttons.btCloseDis}
            alt="btClose"
            onClick={onClickBtClose}
            name="button"
          />
        </div>
        <div className="btNext">
          <img id="btNext" src={buttons.btNextDis} alt="btNext" name="button" />
        </div>
      </div>
    </div>
  );
};

SinglePhoto.prototypes = {
  photosList: PropTypes.array.isRequired,
  pathToPhoto: PropTypes.string.isRequired,
  photoNumber: PropTypes.string.isRequired,
  onClickBtClose: PropTypes.func.isRequired
};

export default SinglePhoto;
