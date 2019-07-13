import React from "react";
import DropdownMenu from "./DropdownMenu";

const CategoryCaption = ({ categories, curCategory }) => {
  return (
    <div className="row">
      <div className="col-2">
        <button
          className="btn hideDropMenu btnMenu"
          type="button"
          data-toggle="dropdown"
        >
          <img src="./Pictures/Util/menu.png" alt="menu" />
        </button>
        <div className="dropdown-menu">
          <div className="MenuList">
            <DropdownMenu categories={categories} />
          </div>
        </div>
      </div>
      <div className="col-10">{categories[curCategory]}</div>
    </div>
  );
};

export default CategoryCaption;
