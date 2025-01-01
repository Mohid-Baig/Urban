import { StyleSheet, View } from "react-native";
import React from "react";
import { DrawerItem } from "@react-navigation/drawer";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome6
} from "@expo/vector-icons";
import {useFonts} from 'expo-font'

const DrawerItemsDesign = ({ props }) => {
  const activeRouteName = props.state.routes[props.state.index].name; // Get the active route name
  const [fontsLoaded] = useFonts({
    'CustomFont': require('../../assets/fonts/Poppins-Medium.ttf'), // Adjust the path if necessary
  });

  if (!fontsLoaded) {
    return null; 
  }
  return (
    <View>
      {/* Profile Screen */}
      <DrawerItem
        label="Mi perfil"
        style={styles.main}
        labelStyle={{
          ...styles.text,
          color: activeRouteName === "Profile" ? "#ED8F03" : "#000", // Change color if this is the active screen
        }}
        onPress={() => props.navigation.navigate("Profile")}
        icon={({ color, size, focused }) => (
          <MaterialIcons
            name="account-circle"
            size={30}
            color={activeRouteName === "Profile" ? "#ED8F03" : "#000"} // Change icon color when focused
          />
        )}
      />

      {/* Oportunidades Screen */}
      <DrawerItem
        label="Oportunidades"
        style={styles.main}
        labelStyle={{
          ...styles.text,
          color: activeRouteName === "opportunities" ? "#ED8F03" : "#000", // Active screen color
        }}
        onPress={() => props.navigation.navigate("opportunities")}
        icon={({ color, size, focused }) => (
          <AntDesign
            name="pluscircle"
            size={25}
            color={activeRouteName === "opportunities" ? "#ED8F03" : "#000"} // Icon color changes
          />
        )}
      />

      {/* Ajustes Screen */}
      <DrawerItem
        label="Ajustes"
        style={styles.main}
        labelStyle={{
          ...styles.text,
          color: activeRouteName === "Ajustes" ? "#ED8F03" : "#000",
        }}
        onPress={() => props.navigation.navigate("Ajustes")}
        icon={({ color, size, focused }) => (
          <MaterialIcons
            name="settings"
            size={26}
            color={activeRouteName === "Ajustes" ? "#ED8F03" : "#000"}
          />
        )}
      />

      {/* Salir Screen */}
      <DrawerItem
        label="Salir"
        style={styles.main}
        labelStyle={{
          ...styles.text,
          color: activeRouteName === "Salir" ? "#ED8F03" : "#000",
        }}
        onPress={() => props.navigation.navigate("Salir")}
        icon={({ color, size, focused }) => (
          <FontAwesome6
            name="power-off"
            size={25}
            color={activeRouteName === "Salir" ? "#ED8F03" : "#000"}
          />
        )}
      />
    </View>
  );
};

export default DrawerItemsDesign;

const styles = StyleSheet.create({
  main: {
    borderBottomWidth: 1.5,
    borderBottomColor: "#EAEAEF",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
     fontFamily: 'CustomFont',
  },
});
