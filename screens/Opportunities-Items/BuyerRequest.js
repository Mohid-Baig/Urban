import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo, Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const BuyerRequest = () => {
  const IconDetails = [
    { icon: <Ionicons name="bed" size={24} color="#7D869D" />, text: "2 bed", showDot: true },
    { icon: <FontAwesome name="bath" size={24} color="#7D869D" />, text: "2 bath", showDot: true },
    { icon: <Entypo name="map" size={24} color="#7D869D" />, text: "90m2", showDot: false },
  ];

  const featureButtons = [
    { text: "Piscina" },
    { text: "Apartamento" },
    { text: "Parking" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.headerContainer}>
          <View style={styles.requestButton}>
            <Text style={styles.requestText}>Peticion de comprador</Text>
          </View>
          <Text style={styles.priceText}>350.000€</Text>
        </View>
        <View style={styles.locationContainer}>
          <Entypo name="location-pin" size={24} color="#7D869D" />
          <Text style={styles.locationText}>Torrevieja, Spain</Text>
        </View>
        <View style={styles.paddingContainer}>
          <View style={styles.IconDetailsContainer}>
            {IconDetails.map((detail, index) => (
              <View key={index} style={styles.detailItem}>
                {detail.icon}
                <Text style={styles.locationText}>{detail.text}</Text>
                {detail.showDot && <Entypo name="dot-single" size={24} color="#7D869D" />}
              </View>
            ))}
          </View>
        </View>
        <View style={styles.featuresContainer}>
          {featureButtons.map((button, index) => (
            <View key={index} style={styles.featureButton}>
              <Text style={styles.featureText}>{button.text}</Text>
            </View>
          ))}
        </View>
        <View style={styles.contactContainer}>
          <View>
            <Text>Yana Baskal</Text>
            <Text>Yana@gmail.com</Text>
          </View>
          <View style={styles.phoneContainer}>
            <Entypo name="dot-single" size={24} color="#7D869D" />
            <Text>+34 677 130 650</Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="email" size={24} color="#757E95" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BuyerRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    marginRight: 1,
    height:290
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  requestButton: {
    backgroundColor: "#000",
    width: "40%",
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginLeft: 20,
  },
  requestText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#fff",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 15,
  },
  locationContainer: {
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center",
    marginTop: 15,
  },
  locationText: {
    color: "#7D869D",
    fontSize: 13,
    fontWeight: "400",
  },
  paddingContainer: {
    padding: 20,
  },
  IconDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#7D869D",
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  featuresContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  featureButton: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F2F4F9",
    paddingHorizontal: 20,
    borderRadius: 7,
  },
  featureText: {
    fontSize: 12,
    fontWeight: "500",
  },
  contactContainer: {
    height: 63,
    width: 388,
    backgroundColor: "#F2F4F9",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  phoneContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
