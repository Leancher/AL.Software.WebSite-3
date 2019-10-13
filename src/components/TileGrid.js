import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { catPropsName } from "../Utilites/catPropsName";
const { name, caption } = catPropsName;

const buildTailCell = (catNum, subCatNum, name, caption) => {
  const picName = name + subCatNum + ".jpg";
  const link = "/" + catNum + "/" + subCatNum;
  return (
    <div className="TileCell" key={subCatNum}>
      <NavLink id={subCatNum} key={subCatNum} to={link}>
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
      </NavLink>
    </div>
  );
};

const TileGrid = ({ catNum, subCatsList }) => {
  return (
    <div className="TileGrid">
      {subCatsList.map((category, subCatNum) => {
        //Массив начинается с 0, таблицв БД с 1, первый элемент пустой
        if (subCatNum === 0) return "";
        return buildTailCell(
          catNum,
          subCatNum,
          category[name],
          category[caption]
        );
      })}
    </div>
  );
};

TileGrid.prototypes = {
  catNum: PropTypes.string.isRequired,
  subCatsList: PropTypes.array.isRequired
};

export default TileGrid;
