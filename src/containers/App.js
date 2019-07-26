import React, { Component } from "react";
import { connect } from "react-redux";
import MainPage from "../components/MainPage";

import { setCurrentCategory } from "../actions";
import { getCategoriesList } from "../actions";

class App extends Component {
  componentDidMount() {
    // Редьюсер асинхронный, вызываем его в этом месте.
    this.props.getCatList();
  }
  render() {
    const { categories, category = 0, setCurCategory } = this.props;
    return (
      <React.Fragment>
        <MainPage
          categories={categories.items}
          category={category}
          setCurCategory={setCurCategory}
        />
      </React.Fragment>
    );
  }
}

// В mapStateToProps указываем только те значения из store, которые для этого компоненты (в этом случае App).
// Перерисовка компонента проихсодит только при обновлении этих данных.
// Вторым аргументом получаем собственные свойства. В этом случае были переданы параметры URL.
const mapStateToProps = (state, ownProps) => {
  const cat = ownProps.match.params.cat;
  const subCat = ownProps.match.params.subCat;
  return {
    categories: state.categories,
    category: cat,
    subCategory: subCat
  };
};

// В mapDispatchToProps указываем только те редьюсеры, которые будут вызываться в этом
// компонентые. Затем в props комопненты можно вызвать соответствующие редьюсерам функции
const mapDispatchToProps = dispatch => ({
  getCatList: () => dispatch(getCategoriesList()),
  setCurCategory: number => dispatch(setCurrentCategory(number))
});

// Получаем данные из store. В нужном комопненте эти данные можно получить из props
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
