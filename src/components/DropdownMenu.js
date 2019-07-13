import React from "react";
import { buildLink } from "./utilites";

const DropdownMenu = ({ categories }) => {
  return categories.map((element, index) => {
    if (index === 8) return "";
    return (
      <a href={buildLink(index, 0)} key={index}>
        {element}
      </a>
    );
  });
};

export default DropdownMenu;
