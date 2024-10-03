import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Switch from "@splicer97/react-native-switch";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ToggleSwitch = ({ label }) => {
  const [state, setState] = useState(false);

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Switch
          value={state}
          onValueChange={setState}
          activeColor="#0075FF"
          circleStyle={{ backgroundColor: "#fff", height: 15, width: 15 }}
          trackWidth={10}
          containerStyle={{ height: 30 }}
        />
        {label && <Text style={styles.label}>{label}</Text>}
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  label: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
  },
});

export default ToggleSwitch;
