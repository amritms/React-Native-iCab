import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Main from "./src/main";

export default class App extends Component {
  render() {
    return <Main />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    margin: 10
  }
});
