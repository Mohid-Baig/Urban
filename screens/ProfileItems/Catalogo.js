import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import {useFonts} from 'expo-font'

const Catalogo = () => {
  const PropertYCards = [
    {
      image: require("../../assets/images/Pic1.png"),
    },
    {
      image: require("../../assets/images/Pic2.png"),
    },
    {
      image: require("../../assets/images/Pic3.png"),
    },
    {
      image: require("../../assets/images/Pic4.png"),
    },
    {
      image: require("../../assets/images/Pic5.png"),
    },
  ];

  const propertyDetails = [
    { icon: <Ionicons name="bed" size={24} color="#7D869D" />, text: "2 bed", showDot: true },
    { icon: <FontAwesome name="bath" size={24} color="#7D869D" />, text: "2 bath", showDot: true },
    { icon: <Entypo name="map" size={24} color="#7D869D" />, text: "90m2", showDot: false },
  ];
  const [fontsLoaded] = useFonts({
    'CustomFont': require('../../assets/fonts/Poppins-Black.ttf'), // Adjust the path if necessary
  });
  if (!fontsLoaded) {
    return null; 
  }
  return (
    <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
      {PropertYCards.map((item, index) => (
        <TouchableOpacity key={index} style={styles.Container}>
          <View style={styles.imageCenter}>
            <Image source={item.image} style={styles.image} />
          </View>

          <View style={styles.priceTag}>
            <Text style={styles.priceText}>350.000€</Text>
          </View>

          <Text style={styles.locationTitle}>Torrevieja - Spain</Text>
          <View style={styles.locationContainer}>
            <Entypo name="location-pin" size={24} color="#7D869D" />
            <Text style={styles.locationText}>Calle Finlandia 10 3ºB Torrevieja 03183</Text>
          </View>

          <View style={styles.propertyDetailsContainer}>
            {propertyDetails.map((detail, index) => (
              <View key={index} style={styles.detailItem}>
                {detail.icon}
                <Text style={styles.locationText}>{detail.text}</Text>
                {detail.showDot && <Entypo name="dot-single" size={24} color="#7D869D" />}
              </View>
            ))}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Catalogo;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  Container: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 10,
  },
  imageCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 212,
    width: 322,
    marginTop: 10,
  },
  priceTag: {
    height: 32,
    width: 103,
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.8)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 115,
    left: 20,
  },
  priceText: {
    fontSize: 14,
    fontWeight: "800",
  },
  locationTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginLeft: 12,
    marginTop: 5,
    color: "#15171C",
    fontFamily: 'CustomFont',
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 5,
  },
  locationText: {
    color: "#7D869D",
    fontSize: 13,
    fontWeight: "400",
    marginLeft:8,
    fontFamily: 'CustomFont',
  },
  propertyDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 5,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
