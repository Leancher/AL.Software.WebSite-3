import React from "react";
import NavigationMenu from "./NavigationMenu";
import Content from "./Content";

class Body extends React.Component {
  render() {
    const { categories, setCatNum, catNum } = this.props;
    return (
      <div className="row">
        <NavigationMenu categories={categories} setCatNum={setCatNum} />
        <Content categories={categories} catNum={catNum} />
      </div>
    );
  }
}

export default Body;
