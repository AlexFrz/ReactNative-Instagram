import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../config/Colors";
import PhoneInputForm from "../components/PhoneInputForm";
import PrimaryButton from "../components/PrimaryButton";

export class SignUpScreen1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPhoneEnabled: true,
    };
  }

  switchButton(val) {
    this.setState({ isPhoneEnabled: val });
  }

  render() {
    const { isPhoneEnabled } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require("../assets/images/avatar.jpg")}
              style={styles.avatar}
            />
          </View>
          <View style={styles.switchTitleWrapper}>
            <TouchableOpacity
              onPress={() => this.switchButton(true)}
              style={[
                styles.titleSwitch,
                {
                  borderBottomColor: isPhoneEnabled
                    ? colors.black
                    : colors.gray1,
                },
              ]}
            >
              <Text
                style={[
                  styles.title,
                  { color: isPhoneEnabled ? colors.black : colors.gray },
                ]}
              >
                PHONE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.switchButton(false)}
              style={[
                styles.titleSwitch,
                {
                  borderBottomColor: isPhoneEnabled
                    ? colors.gray1
                    : colors.black,
                },
              ]}
            >
              <Text
                style={[
                  styles.title,
                  { color: isPhoneEnabled ? colors.gray1 : colors.black },
                ]}
              >
                EMAIL
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.phoneNumberINputWrapper}>
            <PhoneInputForm />
          </View>
          <View style={styles.notificationWRapper}>
            <Text style={styles.notificationText}>
              You may recieve SMS updates from instagram and can opt out at any
              time.
            </Text>
          </View>

          <View style={styles.buttonWrapper}>
            <PrimaryButton
              buttonLabel="Next"
              buttonBgColor={colors.primary}
              textColor={colors.secondary}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <Text style={styles.login}>
            <Text style={styles.alreradyAccount}>Already have an account?</Text>{" "}
            <Text style={styles.logIn}>LogIn.</Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default SignUpScreen1;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
  avatarWrapper: {
    display: "flex",
    alignItems: "center",
    marginTop: "20%",
  },
  avatar: {
    width: 150,
    height: 150,
  },
  switchTitleWrapper: {
    display: "flex",
    flexDirection: "row",
    margin: 30,
    marginTop: 30,
  },
  titleSwitch: {
    display: "flex",
    flex: 1,

    borderBottomWidth: 2,
  },
  title: {
    textAlign: "center",
    padding: 15,
    fontWeight: "700",
  },
  phoneNumberINputWrapper: {
    display: "flex",
    margin: 30,
  },
  notificationWRapper: {
    padding: 30,
    paddingTop: 10,
  },
  notificationText: {
    color: colors.gray1,
    textAlign: "center",
  },
  buttonWrapper: {
    marginLeft: 15,
    marginRight: 15,
  },
  topContainer: {
    display: "flex",
    flex: 1,
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderColor: colors.gray2,
    padding: 15,
  },
  login: {
    textAlign: "center",
  },
  alreradyAccount: {
    color: colors.gray1,
  },
  logIn: {
    fontWeight: "700",
  },
});
