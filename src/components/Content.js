import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import CategoryCaption from "./CategoryCaption";
import { getCurrentCategory } from "../actions";
import { catPropsName } from "../containers/catPropsName";
import BuildTileGrid from "./TileGrid";

const {
  name,
  caption,
  description,
  isPhotoAlbum,
  isTileGrid,
  isArticle
} = catPropsName;

class Content extends React.Component {
  componentDidMount() {
    const { catNum, getCurCat } = this.props;
    // Вызываем при первой загрузке страницы, когда никаких данных еще не было
    getCurCat(catNum);
  }
  // Метод вызывается сразу после обновления, аргумент - предыдущее состояние
  componentDidUpdate(prevProps) {
    const { getCurCat, catNum } = this.props;
    // Сравниваем предыдущее состояние с текущим. Если не равны, то
    // делаем запрос на категорию. Когда придет ответ, состояния будут уже равны
    // и запрос больше не выполнится
    if (prevProps.catNum !== catNum) getCurCat(catNum);
  }
  render() {
    const { subCats, catCaption, catIsTileGrid, state } = this.props;
    return (
      <React.Fragment>
        {state === "success" ? (
          <div className="col-xl-12 col-lg-9 col-md-9 col-sm-9 ContentBlock">
            <CategoryCaption catCaption={catCaption} />
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-gutters">
              {catIsTileGrid === "1" ? (
                <BuildTileGrid subCats={subCats} />
              ) : (
                "currentCategory"
              )}
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  const { categories, currentCategory } = store;
  const { catNum } = ownProps.match.params;
  const catProps = categories.items[catNum];
  return {
    catNum: catNum,
    subCats: currentCategory.items,
    state: currentCategory.state,
    catName: catProps[name],
    catTitle: catProps[name],
    catCaption: catProps[caption],
    catDesc: catProps[description],
    catIsTileGrid: catProps[isTileGrid]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurCat: catNum => dispatch(getCurrentCategory(catNum))
  };
};

// Получаем данные из store. В нужном комопненте эти данные можно получить из props
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)
);
