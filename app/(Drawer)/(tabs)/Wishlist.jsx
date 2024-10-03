import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
// import SVGImages from "../../assets/SVGs";
import SVGImages from '../../../assets/SVGs'
import LeftArrow from "../../../assets/SVGs/Files/LeftArrow";
import GridView from "../../../screens/wishlist/GridView";
import ListView from "../../../screens/wishlist/ListView";

export default function Wishlist() {
  const [selectedView, setSelectedView] = useState(""); // Track selected view

  // Function to handle icon press
  const handleViewOptionPress = (view) => {
    setSelectedView(view);
  };

  const EmptyComponent = () => {
    return (
      <>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleViewOptionPress("grid")}
        >
          <SVGImages.Icons.AddGradeint />
        </TouchableOpacity>
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateText}>
            <Text style={styles.emptyStateTitle}>Your Page is </Text>
            <Text style={styles.emptyStateSubtitle}>Empty</Text>
          </Text>
          <Text style={styles.description}>
            Click the add button above to start exploring and choose your
            favorite estates.
          </Text>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <LeftArrow />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomHeader}>
        <Text style={styles.estateNumbers}>0 Estates</Text>
        <View style={styles.viewOptions}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => handleViewOptionPress("grid")}
          >
            {selectedView === "grid" ? (
              <LinearGradient
                colors={["#FF4995", "#D6034F"]}
                style={styles.gradientBackground}
              >
                <Ionicons name="grid" size={20} color="white" />
              </LinearGradient>
            ) : (
              <Ionicons name="grid" size={20} color="black" />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => handleViewOptionPress("list")}
          >
            {selectedView === "list" ? (
              <LinearGradient
                colors={["#FF4995", "#D6034F"]}
                style={styles.gradientBackground}
              >
                <MaterialCommunityIcons
                  name="view-split-horizontal"
                  size={20}
                  color="white"
                />
              </LinearGradient>
            ) : (
              <MaterialCommunityIcons
                name="view-split-horizontal"
                size={20}
                color="black"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      {selectedView === "grid" ? (
        <GridView />
      ) : selectedView === "list" ? (
        <ListView />
      ) : (
        <EmptyComponent />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    padding: 10,
  },
  viewOptions: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f4f5f8",
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  gradientBackground: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  addButton: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 50,
  },
  emptyStateContainer: {
    alignItems: "center",
  },
  emptyStateText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  emptyStateTitle: {
    color: "#000",
  },
  emptyStateSubtitle: {
    color: "#0075FF",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  bottomHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  estateNumbers: {
    fontSize: 24,
    color: "#000",
    fontFamily: "BebasNeue_400Regular",
  },
});
