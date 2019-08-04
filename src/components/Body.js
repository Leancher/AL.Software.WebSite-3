import React from "react";
import NavigationMenu from "./NavigationMenu";
import Content from "./Content";

class Body extends React.Component {
  componentDidMount() {}
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    const { categories, catNum } = this.props;
    return (
      <div className="row">
        <NavigationMenu categories={categories} />
        <Content curCat={categories[catNum]} />
      </div>
    );
  }
}

export default Body;
