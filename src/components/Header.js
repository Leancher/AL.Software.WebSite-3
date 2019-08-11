import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { catPropsName } from "../Utilites/catPropsName";

const Header = ({ curCat }) => {
  const { name } = catPropsName;
  let logoName = curCat[name];
  if (!logoName) logoName = "Main";
  return (
    <div className="row justify-content-between header">
      <div className="HeaderTitle">
        <NavLink to={"/0"}>
          <img src={"./Pictures/Logo/" + logoName + ".png"} alt="logo" />
          LEANCHER
        </NavLink>
      </div>
      <div className="HeaderMenu">
        <a href={"#stat"}>Статистика</a>
        <a href="#linkAbout">О сайте</a>
      </div>
    </div>
  );
};

Header.prototypes = {
  curCat: PropTypes.object.isRequired
};

export default Header;
