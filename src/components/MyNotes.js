import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getNotesPreview, getSingleNote } from "../actions";
import NotesPreview from "./MyNotes-Preview";

class MyNotes extends React.Component {
  state = {
    mode: "notesPreview"
  };

  componentDidMount() {
    const { getNotesPreview } = this.props;
    getNotesPreview();
  }

  //   componentDidUpdate(prevProps) {
  //     const { catNum, subCatNum, getPhotosList } = this.props;
  //     if (prevProps.catNum !== catNum) getPhotosList(catNum, subCatNum);
  //   }

  render() {
    const { state, notesList } = this.props;
    if (state !== "success") return null;
    console.log("MyNotes");
    console.log(notesList);
    return <NotesPreview notesList={notesList} />;
  }
}

const mapStateToProps = (store, ownProps) => {
  const { notesPreviewList } = store;
  return {
    state: notesPreviewList.state,
    notesList: notesPreviewList.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNotesPreview: () => dispatch(getNotesPreview()),
    getSingleNote: note => dispatch(getSingleNote(note))
  };
};

MyNotes.prototypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyNotes);
