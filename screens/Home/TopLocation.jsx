import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LocationsData from "../../helpers/mock/LocationMock";

const TopLocations = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.locationContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={LocationsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
    padding: 10,
    borderRadius: 30,
    backgroundColor: "#F5F4F8",
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  name: {
    fontSize: 14,
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default TopLocations;
