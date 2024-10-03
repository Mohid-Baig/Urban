import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

const CategoryItems = [
  { id: 1, name: "All" },
  { id: 2, name: "Review" },
  { id: 3, name: "Sold" },
  { id: 4, name: "Rent" },
  { id: 5, name: "House" },
];

const notifications = {
  today: [
    {
      id: 1,
      message: "New property listed in your area!",
      date: "2024-07-19",
      profileImage: "https://via.placeholder.com/40",
      category: "All",
    },
    {
      id: 2,
      message: "Price drop on a house you were interested in.",
      date: "2024-07-19",
      profileImage: "https://via.placeholder.com/40",
      category: "Sold",
    },
  ],
  older: [
    {
      id: 3,
      message: "Open house event happening this weekend.",
      date: "2024-07-15",
      profileImage: "https://via.placeholder.com/40",
      category: "Rent",
    },
    {
      id: 4,
      message: "New agent joined the platform.",
      date: "2024-07-10",
      profileImage: "https://via.placeholder.com/40",
      category: "Review",
    },
  ],
};

const NotificationTab = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const renderCategoryItem = ({ item }) => {
    const isSelected = item.id === selectedId;

    return (
      <TouchableOpacity
        onPress={() => setSelectedId(item.id)}
        style={styles.itemContainer}
      >
        {isSelected ? (
          <LinearGradient
            colors={["#0075FF", "#4C9FFF"]}
            style={styles.selectedBackground}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.selectedItemText}>{item.name}</Text>
          </LinearGradient>
        ) : (
          <View style={styles.defaultBackground}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationContainer}>
      <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationDate}>{item.date}</Text>
      </View>
    </View>
  );

  const filterNotifications = (notificationsList) => {
    return notificationsList.filter(
      (notification) =>
        selectedCategory === "All" || notification.category === selectedCategory
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CategoryItems}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.notificationsContainer}>
        <Text style={styles.heading}>Today</Text>
        <FlatList
          data={filterNotifications(notifications.today)}
          renderItem={renderNotificationItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <Text style={styles.heading}>Older Notifications</Text>
        <FlatList
          data={filterNotifications(notifications.older)}
          renderItem={renderNotificationItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <SwipeListView />
    </View>
  );
};

export default NotificationTab;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  itemContainer: {
    marginRight: 10,
    borderRadius: 5,
  },
  defaultBackground: {
    backgroundColor: "#F4F5F8",
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  selectedBackground: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  itemText: {
    fontSize: 16,
    color: "#000",
  },
  selectedItemText: {
    fontSize: 16,
    color: "#FFF",
  },
  notificationsContainer: {
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#F4F5F8",
    borderRadius: 5,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationMessage: {
    fontSize: 14,
    color: "#000",
  },
  notificationDate: {
    fontSize: 12,
    color: "#888",
  },
});
