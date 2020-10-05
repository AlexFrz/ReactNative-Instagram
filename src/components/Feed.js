import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../config/Colors";

export default function Feed() {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeftWrapper}>
          <Image
            style={styles.profileThumb}
            source={require("../assets/images/face.jpg")}
          />
          <Text style={styles.headerTitle}>iamaleph</Text>
        </View>
        <Image
          style={styles.iconSmall}
          source={require("../assets/images/dots.jpg")}
        />
      </View>
      <View>
        <Image
          style={styles.feedImage}
          source={require("../assets/images/feedImage.jpg")}
        />
      </View>
      <View style={styles.feedImageFooter}>
        <View style={styles.feedImageFooterLeftWrapper}>
          <Image
            style={styles.icon}
            source={require("../assets/images/heartfeed.jpg")}
          />
          <Image
            style={styles.icon}
            source={require("../assets/images/comment.png")}
          />
          <Image
            style={styles.icon}
            source={require("../assets/images/messagefeed.png")}
          />
        </View>
        <Image
          style={styles.icon}
          source={require("../assets/images/bookmarkfeed.png")}
        />
      </View>
      <View style={styles.underLineWrapper}>
        <View style={styles.underLine} />
      </View>
      <View style={styles.likesAndCommentsWrapper}>
        <Image
          style={styles.likesImage}
          source={require("../assets/images/heart.png")}
        />
        <Text style={styles.likesTitle}>1,124 likes</Text>
      </View>
      <View style={styles.description}>
        <Text>
          <Text style={styles.headerTitleUnder}> imaleph </Text>
          <Text style={styles.legend}> Prêt pour de nouvelles aventures </Text>
        </Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  profileThumb: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    padding: 10,
    marginHorizontal: 5,
  },
  headerLeftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSmall: {
    marginTop: 5,
    height: 40,
    width: 40,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "600",
  },
  feedImage: {
    width: 400,
    height: 400,
  },
  feedImageFooter: {
    paddingHorizontal: 10,
    paddingVertical: 7.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feedImageFooterLeftWrapper: {
    flexDirection: "row",
  },
  underLine: {
    height: 1,
    backgroundColor: colors.gray2,
  },
  underLineWrapper: {
    marginLeft: 10,
    marginRight: 10,
  },
  likesImage: {
    width: 25,
    height: 25,
  },
  likesAndCommentsWrapper: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  likesTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 10,
  },
  headerTitleUnder: {
    marginLeft: 6,
    fontSize: 18,
    fontWeight: "600",
  },
  legend: {
    fontSize: 18,
  },
  description: {
    paddingHorizontal: 10,
  },
});
