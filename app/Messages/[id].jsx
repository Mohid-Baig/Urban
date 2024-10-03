import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import MessagesMock from "../../helpers/mock/MessagesMock";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import LeftArrow from "../../assets/SVGs/Files/LeftArrow";
import UserBg from "../../assets/images/User - Big.png"; // Correctly import the image

const CallClient = () => {
  const { id } = useLocalSearchParams();
  const data = MessagesMock.find((message) => message.id === id);

  const [duration, setDuration] = useState("00:00");

  useEffect(() => {
    let startTime = new Date();
    const interval = setInterval(() => {
      const now = new Date();
      const diff = new Date(now - startTime);
      const minutes = String(diff.getUTCMinutes()).padStart(2, "0");
      const seconds = String(diff.getUTCSeconds()).padStart(2, "0");
      setDuration(`${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          /* Handle back navigation */
        }}
      >
        <LeftArrow />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.name}>{data.name}</Text>
        <ImageBackground source={UserBg} style={styles.imageBackground}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: data.image }} style={styles.profileImage} />
          </View>
        </ImageBackground>
        <LinearGradient
          colors={["#ff4995", "#d6034f"]}
          style={styles.durationButton}
        >
          <Text style={styles.duration}>{duration}</Text>
        </LinearGradient>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconBox}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Feather name="mic-off" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => router.back()}>
          <LinearGradient
            colors={["#0075FF", "#4c9fff"]}
            style={styles.callButton}
          >
            <Text style={styles.callButtonText}>End Call</Text>

            <View style={styles.callEndICon}>
              <MaterialIcons name="call-end" size={24} color="white" />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CallClient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 45,
  },
  content: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
  },
  name: {
    fontSize: 24,
    fontFamily: "Montserrat_700Bold",
    marginBottom: 10,
  },
  imageBackground: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  duration: {
    fontSize: 16,
    color: "#fff",
  },
  durationButton: {
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F5F4F8",
    padding: 24,
    margin: 20,
    borderRadius: 50,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  iconBox: {
    backgroundColor: "#fff",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  callButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 50,
  },
  callButtonText: {
    color: "white",
    marginRight: 10,
    fontSize: 16,
    fontFamily: "Montserrat_700Bold",
  },
  callEndICon: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
