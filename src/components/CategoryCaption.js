import React from "react";
import { connect } from "react-redux";
import DropdownMenu from "./DropdownMenu";

const CategoryCaption = ({ categories, curCategory }) => {
  //console.log("CategoryCaption " + categories[curCategory]);
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
            <DropdownMenu />
          </div>
        </div>
      </div>
      <div className="col-10">{categories[curCategory]}</div>
    </div>
  );
};

const mapStateToProps = state => {
  //console.log("mapStateToProps " + state.categories);
  return {
    categories: [...state.categories],
    curCategory: state.currentCategory
  };
};

export default connect(mapStateToProps)(CategoryCaption);
