import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "./Header";
import Body from "./Body";
import { getCategoriesList } from "../actions/getCategoriesList";

class Default extends Component {
  UNSAFE_componentWillReceiveProps() {
    return true;
  }
  UNSAFE_componentWillUpdate() {
    return true;
  }
  componentDidMount() {
    // Редьюсер асинхронный, вызываем его в этом месте.
    this.props.getCatList();
  }
  render() {
    const { categories, catNum, state, subCatNum } = this.props;
    console.log("Default render");
    console.log(subCatNum);
    // Если catNum неопределен (т.е. путь "/"), то перенаправляем на главную страницу
    if (!catNum) return <Redirect from="/" to="/0" />;
    //if (!subCatNum)return <Redirect from={`/${catNum}-`} to={`/${catNum}-0`} />;
    //if (!subCatNum) return <Redirect from={`/${catNum}`} to={`/${catNum}-0`} />;
    // Если данные еще не пришли, ничего не показываем
    return state === "success" ? (
      <Fragment>
        <Header curCat={categories[catNum]} />
        <Body categories={categories} catNum={catNum} subCatNum={subCatNum} />
      </Fragment>
    ) : null;
  }
}

// В mapStateToProps указываем только те значения из store, которые нужны для этого компоненты (в этом случае App).
// Перерисовка компонента проихсодит только при обновлении этих данных.
// Вторым аргументом получаем собственные свойства. В этом случае были переданы параметры URL.
const mapStateToProps = (store, ownProps) => {
  console.log("Default ownProps");
  console.log(ownProps.match.params);
  const { catNum, subCatNum } = ownProps.match.params;
  const { categories } = store;
  return {
    categories: categories.items,
    state: categories.state,
    catNum: catNum,
    subCatNum: subCatNum
  };
};

// В mapDispatchToProps указываем только те редьюсеры, которые будут вызываться в этом
// компонентые. Затем в props комопненты можно вызвать соответствующие редьюсерам функции
const mapDispatchToProps = dispatch => {
  return {
    getCatList: () => dispatch(getCategoriesList())
  };
};

Default.propTypes = {
  getCatList: PropTypes.func.isRequired,
  categories: PropTypes.array,
  state: PropTypes.string,
  catNum: PropTypes.string,
  subCatNum: PropTypes.string
};

// Получаем данные из store. В подключаемом компоненте (App) эти данные можно получить из props
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Default)
);
