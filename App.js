import React, { Component } from "react";

import HomeScreen from "./src/HomeScreen/index.js";
export default class AwesomeApp extends Component {

  render() {
    if((process.env.NODE_ENV || '').toLowerCase() === 'production'){
      // disable console. log in production
      console.log = function () {};
      console.info = function () {};
      console.warn = function () {};
      console.error = function () {}
      console.debug = function () {}
    }
    return <HomeScreen />;
  }
}
