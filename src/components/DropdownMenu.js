import React from "react";
import { connect } from "react-redux";
import { buildLink } from "./utilites";

const DropdownMenu = ({ categories }) => {
  return categories.map((element, index) => {
    if (index === 8) return "";
    return (
      <a href={buildLink(index, 0)} key={index}>
        {element}
      </a>
    );
  });
};

const mapStateToProps = state => {
  //console.log("mapStateToProps " + state.categories);
  return {
    categories: [...state.categories]
  };
};

export default connect(mapStateToProps)(DropdownMenu);
