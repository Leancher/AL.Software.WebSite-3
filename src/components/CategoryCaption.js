import React from "react";
import PropTypes from "prop-types";
// import DropdownMenu from "./DropdownMenu";

const CategoryCaption = ({ catCaption }) => {
  return (
    // Эдемент CategoryCaption будет занимать весь ряд
    <div className="row ">
      {/* Количество колонок, занимаемых элементом в ряду */}
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ContentCaption">
        {/* Внутри колонок вложенный элемент занимает весь ряд */}
        <div className="row">
          {/* Элемент button занимает 2 колонки */}
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
                {/* <DropdownMenu categories={categories} /> */}
              </div>
            </div>
          </div>
          {/* Элемент caption занимает 10 колонок */}
          <div className="col-10">{catCaption}</div>
        </div>
      </div>
    </div>
  );
};

CategoryCaption.prototypes = {
  catCaption: PropTypes.string.isRequired
};

export default CategoryCaption;
