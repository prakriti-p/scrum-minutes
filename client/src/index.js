/* import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import "./index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";
import index from "./js/index"

ReactDOM.render(<App />, document.getElementById("root")); */


import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import { Provider } from "react-redux";
import store from "./js/store/index";
import "./index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";

ReactDOM.render(<Provider store={store}>
                <App />
                </Provider>, 
            document.getElementById("root"));

