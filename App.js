/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Router, Scene } from "react-native-router-flux";

const platformName = Platform.select({ android: "Android", ios: "IOS" });

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.instructions}>
          Please wait, app is initializing ...
        </Text>
        <Text style={styles.instructions}>
          (Data is retrieving from realm. may take some time to initiate your{" "}
          {platformName} App)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const ReactRouter = () => (
  <Router>
    <Scene key="root">
      <Scene key="initialApp" component={App} hideNavBar />
    </Scene>
  </Router>
);

export default ReactRouter;
