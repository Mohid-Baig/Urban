import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import ProfileTopBar from "../../screens/ProfileItems/ProfileTopBar";
import {useFonts} from 'expo-font'


const Profile = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'CustomFont': require('../../assets/fonts/Poppins-Medium.ttf'), // Adjust the path if necessary
  });

  if (!fontsLoaded) {
    return null; 
  }
  return (
    <View style={styles.scrollContainer}>
      {/* Profile Background Image */}
      <ImageBackground
        source={require("../../assets/images/Profile.png")}
        style={styles.image}
      >
        <Image
          source={require("../../assets/images/ProfileDesign.png")}
          style={styles.image}
        />
      </ImageBackground>

      {/* Container of profile */}
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-photo/confident-young-woman-with-her-arms-crossed-looking-away_23-2148130373.jpg",
              }}
              style={styles.imageIcon}
            />
          </View>
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Lindsey Philips</Text>
            <View style={styles.locationContainer}>
              <Entypo name="location-pin" size={24} color="#7D869D" />
              <Text style={styles.locationText}>London, UK</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.messageButton}>
            <MaterialIcons name="message" size={20} color="#fff" />
            <Text style={styles.messageText}>Mensaje</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followText}>Seguir</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>456</Text>
            <Text style={styles.statLabel}>Peticiones</Text>
          </View>
          <View style={[styles.statBox, styles.statBoxMiddle]}>
            <Text style={styles.statNumber}>602</Text>
            <Text style={styles.statLabel}>Inmuebles</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>290</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
        </View>

        {/* Top Tab of Profile screen */}
        <ProfileTopBar />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
   backgroundColor:'#fff'
  },
  image: {
    width: "100%",
    height: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 10,
    flex:1
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImageContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginTop: -50,
    marginLeft: 20,
  },
  imageIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileDetails: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: 'CustomFont', 
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  locationText: {
    fontSize: 13,
    color: "#7D869D",
    fontFamily: 'CustomFont', 
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 10,
  },
  messageButton: {
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 157,
    flexDirection: "row",
    borderRadius: 5,
  },
  messageText: {
    fontWeight: "600",
    fontSize: 13,
    color: "#fff",
    marginLeft: 5,
    fontFamily: 'CustomFont', 
  },
  followButton: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 157,
    borderRadius: 5,
    borderWidth: 1,
  },
  followText: {
    fontWeight: "600",
    fontSize: 13,
    color: "#000",
    fontFamily: 'CustomFont', 
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  statBox: {
    height: 55,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#BEC3CE",
    marginHorizontal: 2,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
  },
  statBoxMiddle: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "800",
  },
  statLabel: {
    fontSize: 12,
    color: "#BEC3CE",
    fontFamily: 'CustomFont', 
  },
});
