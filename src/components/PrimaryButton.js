import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../config/Colors";

export class PrimaryButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonLabel, buttonBgColor, textColor } = this.props;

    const buttonText = buttonLabel;
    const buttonBg = buttonBgColor;
    const labelColor = textColor;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonBg }]}
        >
          <Text style={[styles.text, { color: labelColor }]}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: { width: "100%", padding: 15 },
  button: {
    padding: 15,
    borderRadius: 5,
  },
  text: { textAlign: "center", fontSize: 20 },
});

export default PrimaryButton;
