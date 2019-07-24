import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import App from "./containers/App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:curCategory?" component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

registerServiceWorker();
