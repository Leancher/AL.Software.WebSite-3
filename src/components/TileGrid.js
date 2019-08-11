import React from "react";
import PropTypes from "prop-types";
import { catPropsName } from "../Utilites/catPropsName";
const { name, caption } = catPropsName;

const buildTailCell = (index, name, caption) => {
  const picName = name + index + ".jpg";
  return (
    <div className="TileCell" key={index}>
      <a href="#nolink" /* {buildLink(this.props.catNum, index)} */>
        <div className="TileCellPic">
          <img src={"./Pictures/Preview/" + picName} alt={picName} />
        </div>
        <div className="TileCellCaption">
          {caption}
          <br />
          {/* Добавляем доп. пробелы, чтобы блок с текстом был одинаковой высоты */}
          {caption.length < 28 ? (
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          ) : null}
        </div>
      </a>
    </div>
  );
};

const TileGrid = ({ subCats }) => {
  return (
    <div className="TileGrid">
      {subCats.map((category, index) => {
        //Массив начинается с 0, таблицв БД с 1, первый элемент пустой
        if (index === 0) return "";
        return buildTailCell(index, category[name], category[caption]);
      })}
    </div>
  );
};

TileGrid.prototypes = {
  subCats: PropTypes.array.isRequired
};

export default TileGrid;
