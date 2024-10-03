import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Entypo,
  Ionicons,
  FontAwesome,
  MaterialIcons,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const BuyerRequest = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.headerContainer}>
          <View style={styles.requestButton}>
            <Text style={styles.requestText}>Peticion de comprador</Text>
          </View>
          <Text style={styles.priceText}>350.000€</Text>
        </View>
        <View style={{paddingHorizontal:25}}>
        <View style={{
           borderBottomWidth:1,
           borderBottomColor:'#7D869D',
           paddingBottom:15,
        }} />
        </View>
        <View style={{ height: "55%", backgroundColor: "#fff",padding:20,marginTop:15 }}>
          <Text style={{fontSize:12,fontWeight:'400'}}>Thank you! That was very helpful! Get in touch!</Text>
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
  },
  priceText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 15,
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
