import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import App from "./containers/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const Root = ({ store }) => (
  // Служит для получения необходимых данных из store нашего приложения
  <Provider store={store}>
    <Router>
      {/*  : - ознчает параметр, ? - параметр необязателен
      Для получения параметров в компоненте, надо обратиться к объекту this.props.match.params */}
      <Route exact path="/:cat?/:subCat?" component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

registerServiceWorker();
