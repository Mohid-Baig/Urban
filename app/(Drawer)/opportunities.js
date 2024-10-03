import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import DrawerIcon from "../../screens/DrawerItems/DrawerIcon";
import BuyerRequest from "../../screens/Opportunities-Items/BuyerRequest";
import RenterRequests from "../../screens/Opportunities-Items/RenterRequests";
import { useNavigation } from "expo-router";
const Opportunities = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <DrawerIcon />
        <Text style={styles.title}>OPORTUNIDADES</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#BEC3CE" />
        </TouchableOpacity>
      </View>
      <View
        style={styles.headerBorder}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.content]}>
          <Text style={styles.sectionTitle}>Peticiónes</Text>
        </View>

        <View>
          <BuyerRequest />
        </View>

        <View style={{ marginTop: 15 }}>
          <RenterRequests />
        </View>

        <View style={{ marginTop: 15 }}>
          <BuyerRequest />
        </View>

        <View style={{ marginTop: 15 }}>
          <RenterRequests />
        </View>
      </ScrollView>

      {/* Fixed Button Outside ScrollView */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={()=>navigation.navigate('Home')}
      >
        <AntDesign name="plus" size={12} color="#fff" />
        <Text style={styles.floatingButtonText}>Petición</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Opportunities;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#EAEAEF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 27,
    backgroundColor: "#fff",
  },
  headerBorder: {
    borderColor: "#ED8F03",
    width: 70,
    borderTopWidth: 3,
    marginTop: -2,
    marginLeft: 45,
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
  },
  scrollContainer: {
    paddingBottom: 50,
  },
  floatingButton: {
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ED8F03",
    borderRadius: 50,
    position: "absolute",
    bottom: 20,  // Fixed at the bottom
    right: 20,   // Fixed at the right
  },
  floatingButtonText: {
    fontSize: 12,
    fontWeight: "400",
    color: "#fff",
  },
});
