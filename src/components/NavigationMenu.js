import React from "react";
import { connect } from "react-redux";
import { buildLink } from "./utilites";
import { setCurrentCategory } from "../actions/index";

class NavigationMenu extends React.Component {
  onClickButton = e => {
    console.log(e.currentTarget.id);
    const number = e.currentTarget.id;
    return this.props.setNumberAction(number);
  };
  render() {
    console.log("NavigationMenu " + Object.keys(this.props));
    console.log("NavigationMenu " + this.props.setNumberAction);
    return this.props.categories.map((element, index) => {
      if (index === 8) return "";
      return (
        <button
          id={index}
          className="col-xl"
          /* href={buildLink(index, 0)} */
          key={index}
          onClick={this.onClickButton}
        >
          {element}
        </button>
      );
    });
  }
}

const mapStateToProps = state => {
  //console.log("mapStateToProps " + state.categories);
  return {
    categories: [...state.categories]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setNumberAction: number => dispatch(setCurrentCategory(number))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationMenu);
