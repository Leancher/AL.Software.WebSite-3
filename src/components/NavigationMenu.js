import React from "react";

class NavigationMenu extends React.Component {
  onClickButton = e => {
    const number = e.currentTarget.id;
    return this.props.setCurCategory(number);
  };
  render() {
    const { categories } = this.props;
    return categories.map((element, index) => {
      if (index === 8) return "";
      return (
        <button
          id={index}
          className="col-xl"
          key={index}
          onClick={this.onClickButton}
        >
          {element}
        </button>
      );
    });
  }
}

export default NavigationMenu;
