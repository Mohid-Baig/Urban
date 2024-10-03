import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <LinearGradient
        colors={["#474747", "#000000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.gradient}
      >
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    overflow: "hidden",
  },
  gradient: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    fontFamily: "BebasNeue_400Regular",
  },
});

export default CustomButton;
