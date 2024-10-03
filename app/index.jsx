import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Onboarding from "../screens/Onboarding";

export default function Index() {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
});
