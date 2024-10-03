import React, { useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import MessagesMock from "../../helpers/mock/MessagesMock";
import { GiftedChat } from "react-native-gifted-chat";
import { FontAwesome } from "@expo/vector-icons";
import LeftArrow from "../../assets/SVGs/Files/LeftArrow";

const ChatDetail = () => {
  const { name = "" } = useLocalSearchParams();
  const [messages, setMessages] = useState([]);
  const data = MessagesMock.find((message) => message.name === name) || {};

  useEffect(() => {
    if (data.message) {
      setMessages([
        {
          _id: 1,
          text: data.message,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: data.name,
            avatar: data.image,
          },
        },
      ]);
    }
  }, [data]);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.leftHeader}>
          <TouchableOpacity onPress={handleBack}>
            <LeftArrow />
          </TouchableOpacity>
          <View style={styles.profileContainer}>
            <Image source={{ uri: data.image }} style={styles.profileImage} />
            <View style={styles.profileText}>
              <Text style={styles.profileName}>{data.name}</Text>
              <Text style={styles.onlineStatus}>Online</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.callContainer}
          onPress={() => router.push(`Messages/${data.id}`)}
        >
          <FontAwesome name="phone" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileText: {
    marginLeft: 10,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  onlineStatus: {
    color: "green",
    fontSize: 14,
  },
  callContainer: {
    backgroundColor: "#F5F4F8",
    padding: 10,
    borderRadius: 20,
  },
});

export default ChatDetail;
