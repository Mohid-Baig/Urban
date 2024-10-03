import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default function MyCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}
    >
      {checked && <Entypo name="check" size={20} color="black" />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {},
});
