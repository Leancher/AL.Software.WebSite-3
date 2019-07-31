import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Header from "../components/Header";
import Body from "../components/Body";

import { setCatNum } from "../actions";
import { getCategoriesList } from "../actions";

class App extends Component {
  componentDidMount() {
    // Редьюсер асинхронный, вызываем его в этом месте.
    this.props.getCatList();
  }
  render() {
    const { categories, catNum } = this.props;

    return (
      <React.Fragment>
        <Header curCat={categories.items[catNum]} />
        <Body categories={categories.items} catNum={catNum} />
      </React.Fragment>
    );
  }
}

// В mapStateToProps указываем только те значения из store, которые нужны для этого компоненты (в этом случае App).
// Перерисовка компонента проихсодит только при обновлении этих данных.
// Вторым аргументом получаем собственные свойства. В этом случае были переданы параметры URL.
const mapStateToProps = (state, ownProps) => {
  const { catNum, subCatNum } = ownProps.match.params;
  console.log("App  mapStateToProps");
  console.log(state);
  return {
    categories: state.response.categories,
    // При первой загрузке страницы, когда данные с сервера не пришли
    // catNum будет undefined, Redirect в index.js не сработает
    catNum: !catNum ? 0 : catNum,
    subCatNum: !subCatNum ? 0 : subCatNum
  };
};

// В mapDispatchToProps указываем только те редьюсеры, которые будут вызываться в этом
// компонентые. Затем в props комопненты можно вызвать соответствующие редьюсерам функции
const mapDispatchToProps = dispatch => {
  return {
    getCatList: () => dispatch(getCategoriesList()),
    setCatNum: catNum => dispatch(setCatNum(catNum))
  };
};

// Получаем данные из store. В нужном комопненте эти данные можно получить из props
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
