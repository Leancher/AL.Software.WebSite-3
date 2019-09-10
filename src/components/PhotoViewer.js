import React from "react";
import { connect } from "react-redux";
//import PropTypes from "prop-types";
import { getPhotosList } from "../actions";
import { catPropsName } from "../Utilites/catPropsName";

const { catNum, subCatNum, name } = catPropsName;

const buttons = {
  arrowLEn: "./Pictures/Util/arrowLEn.png",
  arrowREn: "./Pictures/Util/arrowREn.png",
  arrowLDis: "./Pictures/Util/arrowLDis.png",
  arrowRDis: "./Pictures/Util/arrowRDis.png",
  closeEn: "./Pictures/Util/CloseEn.png",
  closeDis: "./Pictures/Util/CloseDis.png"
};

class PhotoViewer extends React.Component {
  constructor() {
    super();
    this.currentPhoto = 0;
  }
  state = {
    mode: "photoGrid"
  };

  componentDidMount() {
    const { catNum, subCatNum, getPhotosList } = this.props;
    getPhotosList(catNum, subCatNum);
  }

  componentDidUpdate(prevProps) {
    const { catNum, subCatNum, getPhotosList } = this.props;
    if (prevProps.catNum !== catNum) getPhotosList(catNum, subCatNum);
  }

  setEnablePic = e => {
    const nameButton = e.target.id;
    if (nameButton === "BtClose") e.target.src = buttons.closeEn;
    if (nameButton === "BtPrev") e.target.src = buttons.arrowLEn;
    if (nameButton === "BtNext") e.target.src = buttons.arrowREn;
  };

  setDisablePic = e => {
    if (e.target.id === "BtClose") e.target.src = buttons.closeDis;
    if (e.target.id === "BtPrev") e.target.src = buttons.arrowLDis;
    if (e.target.id === "BtNext") e.target.src = buttons.arrowRDis;
  };

  photoPath = () => {
    const { catName, subCatNum, photosList } = this.props;
    const path = `./Pictures/${catName}/Album${subCatNum}/${
      photosList[this.currentPhoto]
    }`;
    return path;
  };

  showNextPhoto(photoPlace) {
    this.currentPhoto = Number(this.currentPhoto) + 1;
    if (this.currentPhoto > this.props.photosList.length - 1) {
      this.currentPhoto = this.props.photosList.length - 1;
      return;
    }
    photoPlace.src = this.photoPath();
  }

  showPrevPhoto(photoPlace) {
    this.currentPhoto -= 1;
    if (this.currentPhoto < 0) {
      this.currentPhoto = 0;
      return;
    }
    photoPlace.src = this.photoPath();
  }

  renderPhotoGrid = () => {
    const { photosList, catName, subCatNum } = this.props;
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
                style={{ cursor: "pointer" }}
                name={index}
              />
            </div>
          );
        })}
      </div>
    );
  };

  renderSinglePhoto = () => {
    const { photosList, catName, subCatNum } = this.props;
    return (
      <React.Fragment>
        <div className="BtLeftPlace BtPlace">
          <img
            id="BtPrev"
            src={buttons.arrowLDis}
            alt="BtPrev"
            className="BtPrev"
          />
        </div>
        <div className="PhotoPlace">
          <img
            className="CurrentPhoto"
            id="CurrentPhoto"
            src={this.photoPath()}
            alt={photosList[this.currentPhoto]}
          />
        </div>
        <div className="BtRightPlace BtPlace">
          <div>
            <img id="BtClose" src={buttons.closeDis} alt="BtClose" />
          </div>
          <div className="BtNext">
            <img id="BtNext" src={buttons.arrowRDis} alt="BtNext" />
          </div>
        </div>
      </React.Fragment>
    );
  };

  clickButton = e => {
    const id = e.target.id;
    if (id === "BtPrev") {
      this.showPrevPhoto(e.currentTarget.children[1].children[0]);
    }
    if (id === "BtNext") {
      this.showNextPhoto(e.currentTarget.children[1].children[0]);
    }
    if (id === "photo") {
      this.currentPhoto = e.target.name;
      this.setState({ mode: "singlePhoto" });
    }
    if (id === "BtClose") {
      this.setState({ mode: "photoGrid" });
    }
  };

  selectMode() {
    if (this.state.mode === "photoGrid") return this.renderPhotoGrid();
    return this.renderSinglePhoto();
  }

  render() {
    const { state } = this.props;
    if (state !== "success") return null;
    return (
      <div
        style={{ display: "flex" }}
        onMouseMove={this.setEnablePic}
        onMouseOut={this.setDisablePic}
        onClick={this.clickButton}
      >
        {this.selectMode()}
      </div>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  const { photosList } = store;
  const { subCatProps } = ownProps;
  return {
    catNum: subCatProps[catNum],
    subCatNum: subCatProps[subCatNum],
    catName: subCatProps[name],
    state: photosList.state,
    photosList: photosList.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotosList: (catNum, subCatNum) =>
      dispatch(getPhotosList(catNum, subCatNum))
  };
};

PhotoViewer.prototypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoViewer);
