import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../config/colors";
import PrimaryButton from "../components/PrimaryButton";
import { color } from "react-native-reanimated";

export class InititalLaunchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.languageWrapper}>
          <TouchableOpacity>
            <Text>
              <Text style={styles.language}>English (United States) </Text>
              <Icon name="caret-down" size={20} color={colors.gray1} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <Image
            style={styles.instaLogo}
            source={require("../assets/images/instagramLogo.png")}
          />
          <PrimaryButton
            buttonLabel="Create New Account"
            buttonBgColor={colors.primary}
            textColor={colors.secondary}
          />
          <View style={styles.ButtonItemContainer}>
            <PrimaryButton
              buttonLabel="Login"
              buttonBgColor={colors.secondary}
              textColor={colors.primary}
            />
          </View>
        </View>
        <View style={styles.footerWrapper}>
          <View style={styles.footerContentWrapper}>
            <Text style={styles.from}>from</Text>
            <Text style={styles.facebook}>FACEBOOK</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default InititalLaunchScreen;

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  languageWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  language: {
    color: colors.gray1,
  },
  buttonWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  footerWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  instaLogo: {
    width: "50%",
    height: "25%",
    marginBottom: 20,
  },
  footerContentWrapper: {
    borderTopWidth: 0.5,
    borderColor: colors.gray1,
    width: "100%",
    alignItems: "center",
    padding: 10,
  },
  from: {
    color: colors.gray1,
  },
  facebook: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  ButtonItemContainer: {
    marginTop: -20,
    marginBottom: 0,
    width: "100%",
  },
});
