import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { store } from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import App from "./containers/App";

const Root = ({ store }) => (
  // Служит для получения необходимых данных из store нашего приложения
  <Provider store={store}>
    <Router>
      {/*  : - ознчает параметр, ? - параметр необязателен
      Для получения параметров в компоненте, надо обратиться к объекту this.props.match.params */}
      <Route exact path="/:catNum?/:subCatNum?" component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

registerServiceWorker();
