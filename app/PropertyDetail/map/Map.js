import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import EstateLocation from "../../../assets/images/EstateLocation.png";
import LeftArrow from "../../../assets/SVGs/Files/LeftArrow";
import { router } from "expo-router";

export default function Map() {
  return (
    <View style={styles.container}>
      <ImageBackground source={EstateLocation} style={styles.image}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <LeftArrow />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
  backButton: {
    margin: 16,
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Optional: Add background color to make it stand out
    borderRadius: 20,
    flexDirection: "row",
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
