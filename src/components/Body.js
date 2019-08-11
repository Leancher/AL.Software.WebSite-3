import React from "react";
import PropTypes from "prop-types";
import NavigationMenu from "./NavigationMenu";
import Content from "./Content";

const Body = ({ categories, catNum }) => {
  return (
    <div className="row">
      <NavigationMenu categories={categories} />
      <Content curCat={categories[catNum]} />
    </div>
  );
};

Body.prototypes = {
  categories: PropTypes.array.isRequired,
  catNum: PropTypes.string.isRequired
};

export default Body;
