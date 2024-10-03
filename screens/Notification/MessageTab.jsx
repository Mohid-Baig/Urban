import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Toast from "react-native-toast-message";
import { router } from "expo-router";
import MessagesMock from "../../helpers/mock/MessagesMock";

const MessageTab = () => {
  const [messages, setMessages] = useState(MessagesMock);

  const deleteMessage = (id) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== id)
    );

    // Show toast notification
    Toast.show({
      type: "success",
      text1: "Successfully Deleted",
      position: "bottom",
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.messageBox}
      onPress={() => router.push(`Notification/${item.name}`)}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
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
    <>
      <SwipeListView
        data={messages}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        disableRightSwipe
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 0,
  },
  messageBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F5F4F8",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    borderRadius: 12,
    marginVertical: 5,
    height: 90,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  message: {
    color: "grey",
    fontSize: 14,
  },
  hiddenContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: 12,
    height: 90,
    paddingHorizontal: 15,
    marginTop: 5,
  },
  deleteButton: {
    padding: 10,
  },
});

export default MessageTab;
