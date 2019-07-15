import React from "react";
import PropTypes from "prop-types";

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.getPhotos(year);
  };
  render() {
    const { year, photos, isFetching } = this.props;
    return (
      <div>
        <div>
          <button onClick={this.onBtnClick}>2018</button>
          <button onClick={this.onBtnClick}>2017</button>
          <button onClick={this.onBtnClick}>2016</button>
          <button onClick={this.onBtnClick}>2015</button>
          <button onClick={this.onBtnClick}>2014</button>
        </div>
        <h3>{year} год</h3>
        {/* добавили отрисовку по условию */}
        {isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired, // setYear -> getPhotos
  // добавили новое свойство - isFetching, причем в propTypes нет boolean, есть bool
  isFetching: PropTypes.bool.isRequired
};
