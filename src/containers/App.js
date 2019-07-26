import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Header from "../components/Header";
import Body from "../components/Body";

import { setCatNum } from "../actions";
import { getCategoriesList } from "../actions";

class App extends Component {
  componentDidMount() {
    const { urlCatNum, setCatNum, getCatList } = this.props;
    // Редьюсер асинхронный, вызываем его в этом месте.
    getCatList();
    if (urlCatNum) setCatNum(urlCatNum);
  }
  render() {
    const { categories, catNum, setCatNum } = this.props;
    console.log("App");
    console.log(this.props);
    return (
      <React.Fragment>
        <Header />
        <Body
          categories={categories.items}
          catNum={catNum}
          setCatNum={setCatNum}
        />
      </React.Fragment>
    );
  }
}

// В mapStateToProps указываем только те значения из store, которые нужны для этого компоненты (в этом случае App).
// Перерисовка компонента проихсодит только при обновлении этих данных.
// Вторым аргументом получаем собственные свойства. В этом случае были переданы параметры URL.
const mapStateToProps = (state, ownProps) => {
  const catNum = ownProps.match.params.catNum;
  const subCatNum = ownProps.match.params.subCatNum;
  return {
    categories: state.categories,
    catNum: state.catNum,
    urlCatNum: catNum
    //subCatNum: subCatNum
  };
};

// В mapDispatchToProps указываем только те редьюсеры, которые будут вызываться в этом
// компонентые. Затем в props комопненты можно вызвать соответствующие редьюсерам функции
const mapDispatchToProps = dispatch => ({
  getCatList: () => dispatch(getCategoriesList()),
  setCatNum: catNum => dispatch(setCatNum(catNum))
});

// Получаем данные из store. В нужном комопненте эти данные можно получить из props
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
