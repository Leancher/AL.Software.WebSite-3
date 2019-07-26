import React from "react";
import DropdownMenu from "./DropdownMenu";
import { catPropsName } from "../containers/catPropsName";

const CategoryCaption = ({ categories, category }) => {
  const { caption } = catPropsName;
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
      <div className="col-10">{categories[category][caption]}</div>
    </div>
  );
};

export default CategoryCaption;
