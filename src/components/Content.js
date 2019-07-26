import React from "react";
import CategoryCaption from "./CategoryCaption";

class Content extends React.Component {
  render() {
    const { categories, catNum } = this.props;
    return (
      <div className="col-xl-12 col-lg-9 col-md-9 col-sm-9 ContentBlock">
        <CategoryCaption categories={categories} catNum={catNum} />
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-gutters">
          Redux is a predictable state container for JavaScript apps. It helps
          you write applications that behave consistently, run in different
          environments (client, server, and native), and are easy to test. On
          top of that, it provides a great developer experience, such as live
          code editing combined with a time traveling debugger. You can use
          Redux together with React, or with any other view library. It is tiny
          (2kB, including dependencies), but has a large ecosystem of addons
          available.
        </div>
      </div>
    );
  }
}

export default Content;
