import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPhotosList } from "../actions";
import PhotoGrid from "./PV-PhotoGrid";
import SinglePhoto from "./PV-SinglePhoto";
import { catPropsName } from "../Utilites/catPropsName";

const { catNum, subCatNum, name } = catPropsName;

class PhotoViewer extends React.Component {
  constructor() {
    super();
    this.photoNumber = 0;
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

  getPathToPhoto = () => {
    const { catName, subCatNum } = this.props;
    return `./Pictures/${catName}/Album${subCatNum}`;
  };

  onClickBtClose = e => {
    const id = e.target.id;
    if (id === "btClose") {
      this.setState({ mode: "photoGrid" });
    }
  };

  onClickPhoto = e => {
    const id = e.target.id;
    if (id === "photo") {
      this.photoNumber = e.target.name;
      this.setState({ mode: "singlePhoto" });
    }
  };

  selectMode() {
    const { photosList } = this.props;
    if (this.state.mode === "photoGrid")
      return (
        <PhotoGrid
          photosList={photosList}
          pathToPhoto={this.getPathToPhoto()}
          onClickPhoto={this.onClickPhoto}
        />
      );
    return (
      <SinglePhoto
        photosList={photosList}
        onClickBtClose={this.onClickBtClose}
        pathToPhoto={this.getPathToPhoto()}
        photoNumber={this.photoNumber}
      />
    );
  }

  render() {
    const { state } = this.props;
    if (state !== "success") return null;
    return this.selectMode();
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

PhotoViewer.prototypes = {
  catNum: PropTypes.string.isRequired,
  subCatNum: PropTypes.string.isRequired,
  catName: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  curCatProps: PropTypes.object,
  photosList: PropTypes.array.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoViewer);
