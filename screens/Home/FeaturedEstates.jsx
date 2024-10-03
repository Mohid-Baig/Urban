// FeaturedEstates.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Assuming you're using FontAwesome for the star icon
import BuildingMock from "../../helpers/mock/BuildingMock";
import { router } from "expo-router";

const FeaturedEstates = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => router.push(`PropertyDetail/${item.id}`)}
    >
      <ImageBackground
        source={{ uri: item.propertyImage }}
        style={styles.imageBackground}
      >
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={14} color="gold" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.city}>{item.locationCity}</Text>
          <Text style={styles.price}>{item.pricePerNight} /Night</Text>
        </View>
      </ImageBackground>
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
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden",
  },
  imageBackground: {
    width: 200,
    height: 300,
    justifyContent: "flex-end",
  },
  textContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    gap: 10,
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  city: {
    color: "white",
    fontSize: 14,
  },
  price: {
    color: "white",
    fontSize: 14,
    fontFamily: "Montserrat_700Bold",
  },
  ratingContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 5,
    fontWeight: "bold",
  },
});

export default FeaturedEstates;
