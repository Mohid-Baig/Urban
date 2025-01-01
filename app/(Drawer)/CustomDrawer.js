import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import DrawerItemsDesign from "../../screens/DrawerItems/DrawerItemsDesign";
import {useFonts} from 'expo-font'
const CustomDrawer = (props) => {
  const [fontsLoaded] = useFonts({
    'CustomFont': require('../../assets/fonts/Poppins-Medium.ttf'), // Adjust the path if necessary
  });

  if (!fontsLoaded) {
    return null; 
  }
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.main}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/confident-young-woman-with-her-arms-crossed-looking-away_23-2148130373.jpg",
            }}
            style={styles.image}
          />
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600" , fontFamily: 'CustomFont', }}>
              Angel Septimes
            </Text>
            <Text style={{ fontSize: 14, fontWeight: "400",color:'#7D869D', fontFamily: 'CustomFont', }}>Agente</Text>
          </View>
        </View>

        <View style={{ paddingVertical: 10, marginTop: 50 }}>
          <DrawerItemsDesign props={props} />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // backgroundColor: "#f5f5f5",
    padding: 10,
    paddingVertical: 20,
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 40,
    marginRight: 15,
  },
});
