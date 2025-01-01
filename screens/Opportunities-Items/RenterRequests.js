import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

const BuyerRequest = () => {
  const [fontsLoaded] = useFonts({
    CustomFont: require("../../assets/fonts/Poppins-Medium.ttf"), // Adjust the path if necessary
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
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            Thank you! That was very helpful! Get in touch!
          </Text>
        </View>
        <View style={styles.contactContainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/confident-young-woman-with-her-arms-crossed-looking-away_23-2148130373.jpg",
            }}
            style={styles.image}
          />
          <View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "900",
                color: "#000",
              }}
            >
              Yana Baskal
            </Text>
            <Text style={styles.contactText}>Yana@gmail.com</Text>
          </View>
          <View style={{marginTop:15}}>
          <Entypo name="dot-single" size={24} color="#7D869D" />
          </View>
          <View style={styles.phoneContainer}>
            <Text style={styles.contactText}>+34 677 130 650</Text>
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
    height: 310,
  },
  main: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    marginRight: 1,
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
    fontFamily: "CustomFont",
  },
  priceText: {
    fontSize: 16,
    fontWeight: "800",
    marginRight: 15,
  },
  separatorContainer: {
    paddingHorizontal: 25,
  },
  separatorLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#7D869D",
    paddingBottom: 15,
  },
  messageContainer: {
    height: "55%",
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 15,
  },
  messageText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "CustomFont",
    color: "#000", // Added color for consistency
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
    // marginRight: 5,
  },
  contactText: {
    fontFamily: "CustomFont",
    fontSize: 12,
    fontWeight: "400",
    color: "#7D869D",
  },
});
