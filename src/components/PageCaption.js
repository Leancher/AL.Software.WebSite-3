import React from "react";
import PropTypes from "prop-types";
// import DropdownMenu from "./DropdownMenu";

const PageCaption = ({ caption }) => {
  return (
    // Эдемент CategoryCaption будет занимать весь ряд
    <div className="row ">
      {/* Количество колонок, занимаемых элементом в ряду */}
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ContentCaption CaptionFontSize">
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
          {/* Элемент caption занимает 8 колонок */}
          {
            // (fontSize =
            //   "col-8" + caption.length > 34
            //     ? " CaptionFontSize"
            //     : " CaptionFontSizeSmall")
          }
          <div className="col-8">{caption}</div>
          {/* Пустое место, чтобы надпись была по центру страницы */}
          <div className="col-2">
            <img src="./Pictures/Util/menuEmpty.png" alt="menu" />
          </div>
        </div>
      </div>
    </div>
  );
};

PageCaption.prototypes = {
  caption: PropTypes.string.isRequired
};

export default PageCaption;
