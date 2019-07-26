import React from "react";
import { connect } from "react-redux";

import { catPropsName } from "../containers/catPropsName";
import { buildLink } from "./utilites";

const Header = props => {
  const { name } = catPropsName;
  const {
    categories: { items },
    catNum
  } = props;
  let logoName = "Main";
  logoName = items[catNum][name];
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
  return {
    categories: state.categories,
    catNum: state.catNum
  };
};

export default connect(mapStateToProps)(Header);
