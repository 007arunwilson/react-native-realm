/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Router, Scene, Actions } from "react-native-router-flux";
import realmInstance from "./realm";
import FirstScene from "./src/Components/FirstScreen";
import SecondScene from "./src/Components/SecondScreen";

const platformName = Platform.select({ android: "Android", ios: "IOS" });

class App extends Component {
  componentDidMount() {
    console.log("Component Did Mount");
  }

  onEnter() {
    console.log("On Enter");

    const appInstalledOn = realmInstance
      .objects("AppOptions")
      .filtered("key = 'app_initial_open'");

    if (appInstalledOn.length) {
      Actions.firstScene();
    } else {
      realmInstance.write(() => {
        realmInstance.create("AppOptions", {
          key: "app_initial_open",
          value: Date.now().toString()
        });
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.instructions}>
          Please wait, app is initializing ...
        </Text>
        <Text style={[styles.instructions, { fontSize: 8 }]}>
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
      <Scene key="initialApp" component={App} initial hideNavBar />
      <Scene key="discover">
        <Scene key="firstScene" component={FirstScene} hideNavBar />
        <Scene key="secondScene" component={SecondScene} hideNavBar />
      </Scene>
    </Scene>
  </Router>
);

export default ReactRouter;
