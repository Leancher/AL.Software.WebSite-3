import React from "react";
import PropTypes from "prop-types";
import NavigationMenu from "./NavigationMenu";
import Content from "./Content";

const Body = ({ categories, catNum, subCatNum }) => {
  return (
    <div className="row">
      <NavigationMenu categories={categories} />
      <Content
        curCatProps={categories[catNum]}
        catNum={catNum}
        subCatNum={subCatNum}
      />
    </div>
  );
};

Body.prototypes = {
  categories: PropTypes.array.isRequired,
  catNum: PropTypes.string.isRequired,
  subCatNum: PropTypes.string
};

export default Body;
