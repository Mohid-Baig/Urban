import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import DrawerIcon from "../DrawerItems/DrawerIcon";
export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <DrawerIcon />
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/confident-young-woman-with-her-arms-crossed-looking-away_23-2148130373.jpg",
            }}
            style={styles.image}
          />
          <View>
            <Text style={styles.greeting}>Good Morning! 👋🏻</Text>
            <Text style={styles.userName}>Elisa Wilson</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => router.push("/Notification")}>
          <Ionicons name="notifications" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Feather name="search" size={24} color="black" />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
        <TouchableOpacity>
          <Entypo name="sound-mix" size={24} color="#0075FF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginLeft:15
  },
  greeting: {
    fontSize: 16,
    color: "#555",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
  },
});
