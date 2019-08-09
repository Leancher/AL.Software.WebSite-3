import React from "react";
import { catPropsName } from "../containers/catPropsName";
const { name, caption } = catPropsName;

class TileGrid extends React.Component {
  buildTailCell(index, name, caption) {
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
            {caption.length < 28 ? (
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            ) : null}
          </div>
        </a>
      </div>
    );
  }

  renderTileGrid() {
    return this.props.subCats.map((item, index) => {
      //Массив начинается с 0, таблицв БД с 1, первый элемент пустой
      if (index === 0) return "";
      return this.buildTailCell(index, item[name], item[caption]);
    });
  }

  render() {
    return <div className="TileGrid">{this.renderTileGrid()}</div>;
  }
}

export default TileGrid;
