import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../config/Colors";
export class PhoneInputForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.countryWrapper}>
          <Text style={styles.country}>FR +33</Text>
        </View>
        <View style={styles.inputNumber}>
          <TextInput value={"672094641"} />
        </View>
        <View style={styles.closeBtnWrapper}>
          <Icon
            size={20}
            style={styles.icon}
            color={colors.gray1}
            name={"times"}
          />
        </View>
      </View>
    );
  }
}

export default PhoneInputForm;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.gray1,
    backgroundColor: colors.gray2,
  },
  countryWrapper: {
    display: "flex",
    borderRightWidth: 1,
    borderRightColor: colors.gray1,
    paddingRight: 15,
  },
  country: {
    fontWeight: "700",
    color: colors.gray1,
  },
  inputNumber: {
    display: "flex",
    flex: 1,
    paddingLeft: 15,
  },
  closeBtnWrapper: {
    display: "flex",
    flex: 1,
  },
  icon: {
    textAlign: "right",
  },
});
