import React from "react";
import { catPropsName } from "../containers/catPropsName";
import { buildLink } from "./utilites";

const Header = ({ curCat }) => {
  const { name } = catPropsName;
  let logoName = curCat[name];
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

export default Header;
