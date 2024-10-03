import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import LeftArrow from "../../assets/SVGs/Files/LeftArrow";
import { router } from "expo-router";
import MessageTab from "../../screens/Notification/MessageTab";
import NotificationTab from "../../screens/Notification/NotificationTab";

export default function Notification() {
  const [tabSelected, setTabSelected] = useState("Notification");

  const renderContent = () => {
    if (tabSelected === "Notification") {
      return <NotificationTab />;
    } else if (tabSelected === "Messages") {
      return <MessageTab />;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ marginBottom: 15 }}
      >
        <LeftArrow />
      </TouchableOpacity>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.headingTab,
            tabSelected === "Notification" && styles.activeTab,
          ]}
          onPress={() => setTabSelected("Notification")}
        >
          <Text
            style={[
              styles.tabText,
              tabSelected === "Notification" && styles.activeTabText,
            ]}
          >
            Notification
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.headingTab,
            tabSelected === "Messages" && styles.activeTab,
          ]}
          onPress={() => setTabSelected("Messages")}
        >
          <Text
            style={[
              styles.tabText,
              tabSelected === "Messages" && styles.activeTabText,
            ]}
          >
            Messages
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>{renderContent()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F5F4F8",
    height: 60,
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  headingTab: {
    flexDirection: "row",
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    paddingVertical: 10,
  },
  activeTab: {
    backgroundColor: "#fff",
  },
  tabText: {
    fontSize: 16,
    color: "#000",
  },
  activeTabText: {
    color: "#000",
  },
  contentContainer: {
    flex: 1,
  },
});
