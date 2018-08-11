import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";

import { LoginScreen } from "./routes";

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
      </View>
    );
  }
}

export default createStackNavigator({
  Login: {
    screen: LoginScreen
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  }
});
