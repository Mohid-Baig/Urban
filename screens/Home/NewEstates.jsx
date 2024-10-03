import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import BuildingMock from "../../helpers/mock/BuildingMock";
import { router } from "expo-router";

const NewEstates = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.newContainer}
      onPress={() => router.push(`PropertyDetail/${item.id}`)}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.propertyImage }} style={styles.image} />
        <LinearGradient
          colors={["#0075FF", "#4C9FFF"]}
          style={styles.priceContainer}
        >
          <Text style={styles.price}>{item.pricePerMonth}</Text>
        </LinearGradient>
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.locationRatingContainer}>
        <FontAwesome name="map-marker" size={16} color="red" />
        <Text style={styles.city}>{item.locationCity}</Text>
        <Text style={styles.rating}>⭐{item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderGridItem = ({ item }) => (
    <View style={styles.gridItem}>{renderItem({ item })}</View>
  );

  return (
    <FlatList
      data={BuildingMock}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 10,
  },
  newContainer: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
  },
  gridItem: {
    flex: 1,
    margin: 5,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 187,
    borderRadius: 10,
  },
  priceContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  price: {
    color: "white",
    fontSize: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  locationRatingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  city: {
    fontSize: 14,
    color: "grey",
    marginLeft: 5,
    marginRight: 10,
  },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default NewEstates;
