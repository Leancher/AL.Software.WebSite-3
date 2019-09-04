import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentCategory } from "../actions";
import { catPropsName } from "../Utilites/catPropsName";
import SubCatsList from "./SubCatsList";
import SubCategory from "./SubCategory";

const { name } = catPropsName;

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
    const {
      catNum,
      subCatsList,
      curCatProps,
      state,
      subCat,
      catName
    } = this.props;
    // Ждем пока не придут данные и состояние не станет нужным
    if (state !== "success") return null;
    // Временно. Если выбрана подкатегория, то показываем ее
    if (subCat) return <SubCategory subCatProps={subCat} catName={catName} />;
    // Иначе показываем список подкатегорий
    return (
      <React.Fragment>
        <SubCatsList
          curCatProps={curCatProps}
          catNum={catNum}
          subCatsList={subCatsList}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (store, ownProps) => {
  const { currentCategory } = store;
  const { catNum, curCatProps, subCatNum } = ownProps;
  const subCatsList = currentCategory.items;
  // Если подкатегорий нет или ее номер "0", то подкатегория пустая
  const subCat =
    !subCatsList || subCatNum === "0" ? null : subCatsList[subCatNum];
  return {
    catNum: catNum,
    state: currentCategory.state,
    // Все свойства категории
    curCatProps: curCatProps,
    // Имя категории выделяем отдельно, нужно для получения папки с картинками
    catName: curCatProps[name],
    // Название страницв выделяем отдельно, общее для всех подкатегорий
    catTitle: curCatProps[name],
    subCatNum: subCatNum,
    subCatsList: subCatsList,
    subCat: subCat
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurCat: catNum => dispatch(getCurrentCategory(catNum))
  };
};

Content.prototypes = {
  catNum: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  curCatProps: PropTypes.object,
  catName: PropTypes.string.isRequired,
  catTitle: PropTypes.string.isRequired,
  subCatNum: PropTypes.string.isRequired,
  subCatsList: PropTypes.array,
  subCat: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
