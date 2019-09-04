import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPhotosList } from "../actions";
import { catPropsName } from "../Utilites/catPropsName";

const { caption, isTileGrid, isPhotoAlbum, catNum, subCatNum } = catPropsName;

class PhotoViewer extends React.Component {
  componentDidMount() {
    const { catNum, subCatNum, getPhotosList } = this.props;
    // Вызываем при первой загрузке страницы, когда никаких данных еще не было
    getPhotosList(catNum, subCatNum);
  }
  // Метод вызывается сразу после обновления, аргумент - предыдущее состояние
  componentDidUpdate(prevProps) {
    const { catNum, subCatNum, getPhotosList } = this.props;
    // Сравниваем предыдущее состояние с текущим. Если не равны, то
    // делаем запрос на категорию. Когда придет ответ, состояния будут уже равны
    // и запрос больше не выполнится
    if (prevProps.catNum !== catNum) getPhotosList(catNum, subCatNum);
  }
  render() {
    console.log("photos");
    console.log(this.props.photos);
    return <React.Fragment>PhotoViewer</React.Fragment>;
  }
}

const mapStateToProps = (store, ownProps) => {
  const { photoList } = store;
  const { subCatProps } = ownProps;
  return {
    catNum: subCatProps[catNum],
    subCatNum: subCatProps[subCatNum],
    state: photoList.state,
    photos: photoList.items
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
