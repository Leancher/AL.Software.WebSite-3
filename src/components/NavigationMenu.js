import React from "react";
import { catPropsName } from "../containers/catPropsName";
import { NavLink } from "react-router-dom";

class NavigationMenu extends React.Component {
  onClickButton = e => {
    const number = e.currentTarget.id;
    return this.props.setCatNum(number);
  };
  render() {
    const { categories } = this.props;
    const { caption } = catPropsName;
    return (
      <div className="col-xl-12 col-lg-3 col-md-3 col-sm-3 col-3 mt-xl-0 mt-lg-3 mt-md-3 mt-sm-3 mt-3 MenuList hideMainMenu">
        <div className="row">
          {categories.map((category, index) => {
            if (index === 8) return "";
            return (
              <NavLink
                id={index}
                className="col-xl"
                key={index}
                onClick={this.onClickButton}
                to={"/" + index}
              >
                {category[caption]}
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NavigationMenu;
