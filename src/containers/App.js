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

const mapStateToProps = (state, ownProps) => {
  const curCategory = ownProps.match.params.curCategory;
  console.log("mapStateToProps ownProps");
  console.log(ownProps);
  return {
    user: state.user,
    page: state.page,
    categories: state.categories,
    curCategory: curCategory
  };
};

const mapDispatchToProps = dispatch => ({
  getPhotosAction: year => dispatch(getPhotos(year)),
  getCatList: () => dispatch(getCategoriesList()),
  setCurCategory: number => dispatch(setCurrentCategory(number))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
