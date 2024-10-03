import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚧 Page Coming Soon 🚧</Text>
      <Text style={styles.subtitle}>
        We are working hard to get this page up and running. Stay tuned!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff6347", // Tomato color
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#555", // Dark gray
    textAlign: "center",
  },
});
