import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../config/Colors";
import PrimaryButton from "../components/PrimaryButton";
import { color } from "react-native-reanimated";
import SearchBox from "../components/SearchBox";
import { FlatList } from "react-native-gesture-handler";

const DATA = [
  { id: "1", title: "Language 1", subTitle: "Language 1" },
  { id: "2", title: "Language 2", subTitle: "Language 2" },
  { id: "3", title: "Language 3", subTitle: "Language 3" },
  { id: "4", title: "Language 4", subTitle: "Language 4" },
  { id: "5", title: "Language 5", subTitle: "Language 5" },
  { id: "6", title: "Language 6", subTitle: "Language 6" },
  { id: "7", title: "Language 7", subTitle: "Language 7" },
];
export class InititalLaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languageModalVisible: false,
    };
  }

  handleClick = () => {
    this.setState({ languageModalVisible: !this.state.languageModalVisible });
  };

  render() {
    const { languageModalVisible } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.languageWrapper}>
          <TouchableOpacity
            onPress={() => {
              this.handleClick();
            }}
          >
            <Text>
              <Text style={styles.language}>English (United States) </Text>
              <Icon name="caret-down" size={20} color={colors.gray1} />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <Image
            style={styles.instaLogo}
            source={require("../assets/images/avatar.jpg")}
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
        <Modal visible={languageModalVisible} transparent={true}>
          <View
            style={[
              styles.modalContainer,
              languageModalVisible
                ? { backgroundColor: "rgba(0,0,0,0.5)" }
                : null,
            ]}
          >
            <View style={styles.modalContentContainer}>
              <View style={styles.titleWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    this.handleClick();
                  }}
                >
                  <Text style={styles.title}>SELECT YOUR LANGUAGE</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.underLine} />
              <View style={styles.searchBoxWrapper}>
                <SearchBox />
              </View>
              <View style={styles.underLine} />
              <FlatList
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.languageWraper}>
                    <Text style={styles.langTitle}>{item.title}</Text>
                    <Text style={styles.subLanguage}>{item.subTitle}</Text>
                  </View>
                )}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default InititalLaunchScreen;

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    marginTop: 10,
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
  modalContainer: {
    display: "flex",
    flex: 1,
    paddingVertical: 30,
  },
  modalContentContainer: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.secondary,
    marginLeft: "10%",
    marginRight: "10%",
  },
  titleWrapper: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 20,
  },
  underLine: { height: 0, backgroundColor: colors.gray2 },
  searchBoxWrapper: { marginBottom: 20 },
  languageWraper: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
  },
  langTitle: {
    fontSize: 20,
  },
  subLanguage: {
    color: colors.gray1,
    fontSize: 12,
  },
});
