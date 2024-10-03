import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const propertyTypes = [
  { id: "1", type: "All" },
  { id: "2", type: "Apartment" },
  { id: "3", type: "Loft" },
  { id: "4", type: "House" },
  { id: "5", type: "Studio" },
  { id: "6", type: "Villa" },
  { id: "7", type: "GuestHouse" },
];

const PropertyTypeList = () => {
  const [selectedType, setSelectedType] = useState("All");

  const renderItem = ({ item }) => {
    const isSelected = selectedType === item.type;

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => setSelectedType(item.type)}
      >
        <LinearGradient
          colors={isSelected ? ["#0075FF", "#4C9FFF"] : ["#f0f0f0", "#f0f0f0"]}
          style={isSelected ? styles.selectedItem : styles.item}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={isSelected ? styles.selectedText : styles.text}>
            {item.type}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={propertyTypes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={styles.list}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: 20,
  },
  list: {
    flexDirection: "row",
  },
  item: {
    padding: 10,
    borderRadius: 8,
  },
  selectedItem: {
    margin: 4,
    padding: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  text: {
    color: "#333",
  },
  selectedText: {
    color: "white",
  },
});

export default PropertyTypeList;
