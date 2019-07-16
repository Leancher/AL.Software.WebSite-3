import React from "react";
import { catPropsName } from "../containers/catPropsName";

class NavigationMenu extends React.Component {
  onClickButton = e => {
    const number = e.currentTarget.id;
    return this.props.setCurCategory(number);
  };
  render() {
    const { categories } = this.props;
    const { caption } = catPropsName;
    console.log("NavigationMenu");
    console.log(categories);
    return categories.map((element, index) => {
      if (index === 8) return "";
      return (
        <button
          id={index}
          className="col-xl"
          key={index}
          onClick={this.onClickButton}
        >
          {element[caption]}
        </button>
      );
    });
  }
}

export default NavigationMenu;
