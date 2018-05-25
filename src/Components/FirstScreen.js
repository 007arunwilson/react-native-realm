import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class FirstScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>First Screen</Text>
        <Text style={styles.instructions}>
          You are now redirect to First Screen from inital launch screen
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

export default FirstScreen;
