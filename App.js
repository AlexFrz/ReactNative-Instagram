import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SplashScreen from "./src/screens/SplashScreen";
import InitialLaunchScreen from "./src/screens/InititalLaunchScreen";
import SignUpScreen1 from "./src/screens/SignUpScreen1";
import SignUpScreen2 from "./src/screens/SignUpScreen2";
import FeedScreen from "./src/screens/FeedScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <FeedScreen />
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
