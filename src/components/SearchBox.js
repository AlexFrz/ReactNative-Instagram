import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../config/Colors";

export class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: "" };
  }

  textChanged = (text) => {
    this.setState({ searchText: text });
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.iconWrapper}>
            <Icon
              name="search"
              style={styles.icon}
              size={22}
              color={colors.gray1}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder={"Search"}
              onChangeText={(text) => this.textChanged(text)}
              style={styles.inputBox}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default SearchBox;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    padding: 10,
  },
  iconWrapper: {
    display: "flex",
    flex: 1,
    height: 30,
  },
  inputWrapper: {
    display: "flex",
    flex: 7,
  },
  inputBox: { height: 40 },
  icon: {
    padding: 5,
  },
});
