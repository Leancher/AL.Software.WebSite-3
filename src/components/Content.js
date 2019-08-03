import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import CategoryCaption from "./CategoryCaption";
import { getCurrentCategory } from "../actions";
//import { catPropsName } from "../containers/catPropsName";

/* const {
  name,
  caption,
  description,
  isPhotoAlbum,
  isTileGrid,
  isArticle
} = catPropsName; */

class Content extends React.Component {
  shouldComponentUpdate() {
    const catNum = this.props.match.params.catNum;
    if (!this.props.currentCategory.isFetched) this.props.getCatNum(catNum);
    console.log("Content props");
    console.log(this.props);
    return true;
  }
  render() {
    const { curCat } = this.props;
    return (
      <div className="col-xl-12 col-lg-9 col-md-9 col-sm-9 ContentBlock">
        <CategoryCaption curCat={curCat} />
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 no-gutters">
          Redux is a predictable state container for JavaScript apps. It helps
          you write applications that behave consistently, run in different
          environments (client, server, and native), and are easy to test. On
          top of that, it provides a great developer experience, such as live
          code editing combined with a time traveling debugger. You can use
          Redux together with React, or with any other view library. It is tiny
          (2kB, including dependencies), but has a large ecosystem of addons
          available.
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //const { catNum, subCatNum } = ownProps.match.params;
  return {
    currentCategory: state.responseCurCat.currentCategory
    // При первой загрузке страницы, когда данные с сервера не пришли
    // catNum будет undefined, Redirect в index.js не сработает
    //catNum: !catNum ? 0 : catNum,
    //subCatNum: !subCatNum ? 0 : subCatNum
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCatNum: catNum => dispatch(getCurrentCategory(catNum))
  };
};

// Получаем данные из store. В нужном комопненте эти данные можно получить из props
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Content)
);
