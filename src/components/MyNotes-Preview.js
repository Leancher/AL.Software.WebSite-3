import React from "react";

const MyNotesPreview = ({ notesList }) => {
  console.log("notesList");
  console.log(notesList);
  return notesList.map((item, index) => {
    if (index === 0) return "";
    return (
      <div key={index}>
        {
          <p>
            <b>{item[0]}</b>
          </p>
        }
        {item[1] + "..."}
        &nbsp;&nbsp;&nbsp;
        <label
          id={index}
          className="TextLink"
          style={{ cursor: "pointer" }}
          onClick={this.clickButton}
        >
          Показать полностью
        </label>
      </div>
    );
  });
};

export default MyNotesPreview;
