import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./src/screens/SplashScreen";
import InitialLaunchScreen from "./src/screens/InititalLaunchScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <InitialLaunchScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 20,
    flex: 1,
  },
});
