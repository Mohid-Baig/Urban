import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { Entypo, Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';

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

  const [fontsLoaded] = useFonts({
    'CustomFont': require('../../assets/fonts/Poppins-Medium.ttf'), // Adjust the path if necessary
  });

  if (!fontsLoaded) {
    return null;
  }

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
                {detail.showDot && <Entypo name="dot-single" size={24} color="#7D869D" style={styles.dot} />}
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
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/confident-young-woman-with-her-arms-crossed-looking-away_23-2148130373.jpg",
            }}
            style={styles.image}
          />
          <View>
            <Text style={styles.contactName}>Yana Baskal</Text>
            <Text style={styles.contactEmail}>Yana@gmail.com</Text>
          </View>
          <View style={{marginTop:15}}>
          <Entypo name="dot-single" size={24} color="#7D869D" />
          </View>
          <View style={styles.phoneContainer}>
            <Text style={styles.contactPhone}>+34 677 130 650</Text>
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
    height: 290,
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
    fontFamily: 'CustomFont',
  },
  priceText: {
    fontSize: 16,
    marginRight: 15,
    fontWeight:'800'
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
    fontFamily: 'CustomFont',
    marginLeft:5
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
  dot: {
    marginLeft: 8,
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
    fontFamily: 'CustomFont',
    color: '#7D869D',
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
    marginTop:17
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 30,
  },
  contactName: {
    // fontFamily: 'CustomFont',
    fontSize: 12,
    fontWeight: '900',
    color: '#000',
  },
  contactEmail: {
    fontFamily: 'CustomFont',
    fontSize: 12,
    fontWeight: '400',
    color: '#7D869D',
  },
  contactPhone: {
    fontFamily: 'CustomFont',
    fontSize: 12,
    fontWeight: '400',
    color: '#7D869D',
  },
});
