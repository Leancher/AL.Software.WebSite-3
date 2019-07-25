import React from "react";

import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import CategoryCaption from "./CategoryCaption";

class MainPage extends React.Component {
  render() {
    const { categories, setCurCategory, curCategory = 0 } = this.props;
    return (
      <React.Fragment>
        <Header />
        <div className="row">
          <div className="col-xl-12 col-lg-3 col-md-3 col-sm-3 col-3 mt-xl-0 mt-lg-3 mt-md-3 mt-sm-3 mt-3 MenuList hideMainMenu">
            <div className="row">
              <NavigationMenu
                categories={categories}
                setCurCategory={setCurCategory}
              />
            </div>
          </div>
          <div className="col-xl-12 col-lg-9 col-md-9 col-sm-9 ContentBlock">
            <div className="row ">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ContentCaption">
                <CategoryCaption
                  categories={categories}
                  curCategory={curCategory}
                />
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-gutters">
                Redux is a predictable state container for JavaScript apps. It
                helps you write applications that behave consistently, run in
                different environments (client, server, and native), and are
                easy to test. On top of that, it provides a great developer
                experience, such as live code editing combined with a time
                traveling debugger. You can use Redux together with React, or
                with any other view library. It is tiny (2kB, including
                dependencies), but has a large ecosystem of addons available.
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainPage;
