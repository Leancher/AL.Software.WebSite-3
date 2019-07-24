import React from "react";
import { catPropsName } from "../containers/catPropsName";
import { NavLink } from "react-router-dom";

class NavigationMenu extends React.Component {
  onClickButton = e => {
    const number = e.currentTarget.id;
    return this.props.setCurCategory(number);
  };
  render() {
    const { categories } = this.props;
    const { caption } = catPropsName;
    return categories.map((element, index) => {
      if (index === 8) return "";
      return (
        <NavLink
          id={index}
          className="col-xl"
          key={index}
          onClick={this.onClickButton}
          to={"/" + index}
        >
          {element[caption]}
        </NavLink>
      );
    });
  }
}

export default NavigationMenu;
