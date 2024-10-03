import React from "react";
import { StyleSheet, View } from "react-native";
import { Tabs } from "expo-router";
import TabHeart from "../../../assets/SVGs/Files/TabHeart";
import TabHome from "../../../assets/SVGs/Files/TabHome";
import TabSearch from "../../../assets/SVGs/Files/TabSearch";
import TabProfile from "../../../assets/SVGs/Files/TabProfile";

export default function _layout() {
  const renderIcon = (icon, focused) => (
    <View style={styles.iconContainer}>
      {React.cloneElement(icon, { color: focused ? "#FF4995" : "#1A1A1A" })}
      {focused && <View style={styles.activeDot} />}
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          elevation: 0,
          height: 90,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => renderIcon(<TabHome />, focused),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused }) => renderIcon(<TabSearch />, focused),
        }}
      />
      <Tabs.Screen
        name="Wishlist"
        options={{
          tabBarIcon: ({ focused }) => renderIcon(<TabHeart />, focused),
        }}
      />
      {/* <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => renderIcon(<TabProfile />, focused),
        }}
      /> */}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FF4995",
    marginTop: 2,
  },
});
