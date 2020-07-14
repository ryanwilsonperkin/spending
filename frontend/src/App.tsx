import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import validate from "validate.js";

import theme from "./theme";
import "react-perfect-scrollbar/dist/css/styles.css";
import "./assets/css/index.css";
import validators from "./common/validators";
import Routes from "./Routes";

validate.validators = {
  ...validate.validators,
  ...validators,
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
