import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import Toast from "react-native-toast-message";
import BuildingMock from "../../helpers/mock/BuildingMock";
import DeleteModal from "../../components/Modal/DeleteModal";

const ListView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [items, setItems] = useState(BuildingMock);

  const deleteMessage = (id) => {
    setSelectedItemId(id);
    setModalVisible(true);
  };

  const onClose = () => {
    setModalVisible(false);
    setSelectedItemId(null);
  };

  const onConfirm = () => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== selectedItemId)
    );
    setModalVisible(false);
    Toast.show({
      type: "success",
      text1: "Successfully Deleted",
      position: "bottom",
    });
  };

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
          <Text style={styles.type}>{item.type}</Text>
        </LinearGradient>
      </View>

      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.rating}>⭐{item.rating}</Text>
        <View style={styles.locationRatingContainer}>
          <FontAwesome name="map-marker" size={16} color="red" />
          <Text style={styles.city}>{item.locationCity}</Text>
        </View>
        <Text style={styles.price}>{item.pricePerDay}/day</Text>
      </View>
    </TouchableOpacity>
  );

  const renderHiddenItem = ({ item }) => (
    <LinearGradient
      colors={["#0075ff", "#4c9fff"]}
      style={styles.hiddenContainer}
    >
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteMessage(item.id)}
      >
        <FontAwesome name="trash" size={24} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={items}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        keyExtractor={(item) => item.id.toString()}
        rightOpenValue={-75}
        disableRightSwipe
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
      />
      <DeleteModal
        isVisible={modalVisible}
        onClose={onClose}
        onConfirm={onConfirm}
      />
    </View>
  );
};

export default ListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    paddingVertical: 10,
  },
  newContainer: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 168,
    height: 140,
    borderRadius: 10,
  },
  priceContainer: {
    position: "absolute",
    bottom: 5,
    left: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
  },
  price: {
    fontSize: 18,
    fontFamily: "Montserrat_700Bold",
    marginTop: 15,
  },
  type: {
    fontSize: 10,
    fontFamily: "Montserrat_700Bold",
    color: "white",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  locationRatingContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
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
  hiddenContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: 12,
    height: 150,
    paddingHorizontal: 15,
    marginBottom: 5,
    backgroundColor: "transparent",
  },
  deleteButton: {
    padding: 10,
  },
});
