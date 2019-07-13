import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { Page } from "../components/Page";
import MainPage from "../components/MainPage";

import { setYear, setCurrentCategory } from "../actions";

class App extends Component {
  render() {
    const {
      user,
      page,
      setYearAction,
      categories,
      curCategory,
      setCurCategory
    } = this.props;
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Мой топ фото</h1>
          </header>
          <User name={user.name} />
          <Page photos={page.photos} year={page.year} setYear={setYearAction} />
        </div>
        <MainPage
          categories={categories}
          curCategory={curCategory}
          setCurCategory={setCurCategory}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  user: store.user,
  page: store.page,
  categories: store.categories,
  curCategory: store.curCategory
});

const mapDispatchToProps = dispatch => ({
  setYearAction: year => dispatch(setYear(year)),
  setCurCategory: number => dispatch(setCurrentCategory(number))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
