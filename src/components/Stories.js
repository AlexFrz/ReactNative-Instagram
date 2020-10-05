import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

export class Stories extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.storiesHeaderWrapper}>
          <Text style={styles.storiesHeaderText}>Stories</Text>
          <Text style={styles.storiesHeaderText}>Watch All</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.myStoryImageWrapper}>
            <Image
              style={styles.myStoryImage}
              source={require("../assets/images/face.jpg")}
            />
            <Text>Your Story</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyLive}
              source={require("../assets/images/storieslivecircle.png")}
            />
            <Image
              style={styles.otherStories}
              source={require("../assets/images/picpro2.jpg")}
            />
            <Text>athalheya</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require("../assets/images/storiescircle.png")}
            />
            <Image
              style={styles.otherStories}
              source={require("../assets/images/picpro.jpeg")}
            />
            <Text>samuel.rod..</Text>
          </View>

          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require("../assets/images/storiescircle.png")}
            />
            <Image
              style={styles.otherStories}
              source={require("../assets/images/picpro3.jpeg")}
            />
            <Text style={styles.profileName}>lamidi.kevin</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require("../assets/images/storiescircle.png")}
            />
            <Image
              style={styles.otherStories}
              source={require("../assets/images/picpro4.jpg")}
            />
            <Text style={styles.profileName}>ayoubna...</Text>
          </View>
          <View style={styles.otherStoryImageWrapper}>
            <Image
              style={styles.storyRound}
              source={require("../assets/images/storiescircle.png")}
            />
            <Image
              style={styles.otherStories}
              source={require("../assets/images/propic3.jpeg")}
            />
            <Text style={styles.profileName}>simbkalya</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Stories;

export const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  storiesHeaderWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
  },
  storiesHeaderText: {
    fontSize: 16,
    fontWeight: "600",
  },
  myStoryImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  myStoryImageWrapper: {
    padding: 5,
  },
  otherStories: {
    position: "absolute",
    width: 63,
    height: 63,
    borderRadius: 50,
    margin: 7,
    zIndex: 5,
  },
  storyRound: {
    width: 77,
    height: 77,
  },
  storyLive: {
    marginTop: 3,
    marginLeft: 0.7,
    marginBottom: -3,
    width: 77,
    height: 77,
  },
  otherStoryImageWrapper: {
    marginHorizontal: 2,
  },
  profileName: {
    fontSize: 14,
    textAlign: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
});
