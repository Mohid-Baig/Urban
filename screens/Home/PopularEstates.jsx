// PopularEstates.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import BuildingMock from "../../helpers/mock/BuildingMock";
import SVGImages from "../../assets/SVGs";
import { router } from "expo-router";

const PopularEstates = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => router.push(`PropertyDetail/${item.id}`)}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.propertyImage }} style={styles.image} />
        <SVGImages.Icons.HeartIcon style={styles.heartIcon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.city}>{item.locationCity}</Text>
        <Text style={styles.price}>{item.pricePerMonth}</Text>
        <Text style={styles.rating}>Rating: {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={BuildingMock}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {},
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#f0f0f0",
  },
  imageContainer: {
    position: "relative",
    marginRight: 10,
  },
  image: {
    width: 130,
    height: 140,
    borderRadius: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  city: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
  rating: {
    fontSize: 14,
    color: "#666",
  },
});

export default PopularEstates;
