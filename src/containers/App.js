import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { Page } from "../components/Page";
import MainPage from "../components/MainPage";

import { setCurrentCategory } from "../actions";
import { getCategoriesList } from "../actions";
import { getPhotos } from "../actions/PageActions";

class App extends Component {
  componentDidMount() {
    // Редьюсер асинхронный, вызываем его в этом месте.
    this.props.getCatList();
  }
  render() {
    const { user, page, getPhotosAction } = this.props;
    const { categories, curCategory, setCurCategory } = this.props;
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Мой топ фото</h1>
          </header>
          <User name={user.name} />
          <Page
            photos={page.photos}
            year={page.year}
            isFetching={page.isFetching}
            getPhotos={getPhotosAction}
          />
        </div>
        <MainPage
          categories={categories.items}
          curCategory={curCategory}
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
  const curCategory = ownProps.match.params.curCategory;
  return {
    user: state.user,
    page: state.page,
    categories: state.categories,
    curCategory: curCategory
  };
};

// В mapDispatchToProps указываем только те редьюсеры, которые будут вызываться в этом
// компонентые. Затем в props комопненты можно вызвать соответствующие редьюсерам функции
const mapDispatchToProps = dispatch => ({
  getPhotosAction: year => dispatch(getPhotos(year)),
  getCatList: () => dispatch(getCategoriesList()),
  setCurCategory: number => dispatch(setCurrentCategory(number))
});

// Получаем данные из store. В нужном комопненте эти данные можно получить из props
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
