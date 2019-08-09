import React from "react";

const DropdownMenu = ({ categories }) => {
  return categories.map((element, index) => {
    if (index === 8) return "";
    return (
      <a href="nolink" key={index}>
        {element}
      </a>
    );
  });
};

export default DropdownMenu;
