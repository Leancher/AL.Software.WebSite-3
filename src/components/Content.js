import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CategoryCaption from "./CategoryCaption";
import { getCurrentCategory } from "../actions/getCurrentCategory";
import { catPropsName } from "../Utilites/catPropsName";
import BuildTileGrid from "./TileGrid";

const { name, caption, description, isTileGrid } = catPropsName;

export class Content extends React.Component {
  UNSAFE_componentWillReceiveProps() {
    return true;
  }
  UNSAFE_componentWillUpdate() {
    return true;
  }
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
    const { catNum, subCats, catCaption, catIsTileGrid, state } = this.props;
    return (
      <React.Fragment>
        {state === "success" ? (
          <div className="col-xl-12 col-lg-9 col-md-9 col-sm-9 ContentBlock">
            <CategoryCaption catCaption={catCaption} />
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-gutters">
              {catIsTileGrid === "1" ? (
                <BuildTileGrid catNum={catNum} subCats={subCats} />
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
  const { currentCategory } = store;
  const { catNum, curCatProps, subCatNum } = ownProps;
  console.log("subCatNum");
  console.log(subCatNum);
  return {
    catNum: catNum,
    subCatNum: subCatNum,
    subCats: currentCategory.items,
    state: currentCategory.state,
    catName: curCatProps[name],
    catTitle: curCatProps[name],
    catCaption: curCatProps[caption],
    catDesc: curCatProps[description],
    catIsTileGrid: curCatProps[isTileGrid]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurCat: catNum => dispatch(getCurrentCategory(catNum))
  };
};

Content.prototypes = {
  catNum: PropTypes.string.isRequired,
  subCats: PropTypes.array.isRequired,
  state: PropTypes.string.isRequired,
  catName: PropTypes.string.isRequired,
  catTitle: PropTypes.string.isRequired,
  catCaption: PropTypes.string.isRequired,
  catDesc: PropTypes.string.isRequired,
  catIsTileGrid: PropTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
