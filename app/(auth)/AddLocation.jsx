import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LeftArrow from "../../assets/SVGs/Files/LeftArrow";
import { useRouter } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import { Entypo, AntDesign } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton/CustomButton";
import ChooseLocationMap from "../../assets/images/ChooseLocationMap.png";
const AddLocation = () => {
  const router = useRouter();

  const handleMapPress = (event) => {
    setSelectedLocation(event.nativeEvent.coordinate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <LeftArrow />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => router.push("Login")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>
        <Text>Add Your </Text>
        <Text style={styles.colorTitle}>Location</Text>
      </Text>
      <Text style={styles.description}>
        Tap on the map to select your location.
      </Text>

      <View style={styles.mapContainer}>
        <TouchableOpacity>
          <Image source={ChooseLocationMap} style={styles.ChooseLocationMap} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo name="location-pin" size={24} color="#FF4995" />
          <TextInput style={styles.input} placeholder="Search your Location" />
        </View>
        <TouchableOpacity>
          <AntDesign name="right" size={20} color="#ccc" />
        </TouchableOpacity>
      </View>

      <CustomButton text="Next" onPress={() => router.push("SelectCategory")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 40,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  skipButton: {
    backgroundColor: "#F5F4F8",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  skipText: {
    color: "#0075FF",
    fontFamily: "Montserrat_600SemiBold",
  },
  title: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    marginBottom: 10,
  },
  colorTitle: {
    color: "#0075FF",
  },
  description: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    color: "#6D6D6D",
    marginBottom: 20,
  },
  mapContainer: {
    height: 400,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  ChooseLocationMap: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
  },
  map: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    backgroundColor: "#0075FF",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    bottom: 20,
    left: 20,
    right: 20,
    zIndex: 1000,
  },
  overlayText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F5F4F8",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginBottom: 20,
    paddingRight: 30,
  },
  input: {
    marginLeft: 10,
    fontFamily: "Montserrat_400Regular",
    fontSize: 14,
    color: "#333",
    flex: 1,
  },
});

export default AddLocation;
