import React from "react";
import { connect } from "react-redux";
import { buildLink } from "./utilites";

const Header = props => {
  let logoName = props.catName;
  if (!logoName) logoName = "Main";
  return (
    <div className="row justify-content-between header">
      <div className="HeaderTitle">
        <a href="/">
          <img src={"./Pictures/Logo/" + logoName + ".png"} alt="logo" />
          LEANCHER
        </a>
      </div>
      <div className="HeaderMenu">
        <a href={buildLink(8)}>Статистика</a>
        <a href="#linkAbout">О сайте</a>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  //console.log("mapStateToProps " + state.categories);
  return {
    categories: [...state.categories]
  };
};

export default connect(mapStateToProps)(Header);
