import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import BuyerRequest from "../../screens/Opportunities-Items/BuyerRequest";
import RenterRequests from "../../screens/Opportunities-Items/RenterRequests";
import { useNavigation } from "expo-router";
import { useFonts } from 'expo-font';

const Tab3 = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    'CustomFont': require('../../assets/fonts/Poppins-Medium.ttf'), // Adjust the path if necessary
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Peticiónes</Text>
        </View>

        <View>
          <BuyerRequest />
        </View>

        <View style={{ marginTop: 7 }}>
          <RenterRequests />
        </View>

        <View style={{ marginTop: 7 }}>
          <BuyerRequest />
        </View>

        <View style={{ marginTop: 7 }}>
          <RenterRequests />
        </View>
      </ScrollView>

      {/* Fixed Button Outside ScrollView */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          // Add functionality here for button press
          console.log("Floating Button Pressed!");
        }}
        activeOpacity={0.7} // Adjust opacity change on press
      >
        <AntDesign name="plus" size={15} color="#fff" />
        <Text style={styles.floatingButtonText}>Petición</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Tab3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginRight: 80,
  },
  content: {
    padding: 10,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginLeft: 10,
    fontFamily: 'CustomFont', 
  },
  scrollContainer: {
    paddingBottom: 100,
  },
  floatingButton: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ED8F03",
    borderRadius: 35, // Changed from 50 to match button's dimensions
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 10,  // Ensure button is on top
    elevation: 5, // Adds shadow and raises button on Android
  },
  floatingButtonText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#fff",
    fontFamily: 'CustomFont', 
    marginTop: 5, // Adds a bit of space between the icon and text
  },
});
