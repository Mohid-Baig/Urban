import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import DrawerIcon from "../../screens/DrawerItems/DrawerIcon";
import OpportunitiesTopTab from "../../screens/Opportunities-Items/OpportunitiesTopTab";
import {useFonts} from 'expo-font'
const Opportunities = () => {
  const [fontsLoaded] = useFonts({
    'CustomFont': require('../../assets/fonts/Poppins-Medium.ttf'), // Adjust the path if necessary
  });

  if (!fontsLoaded) {
    return null; 
  }
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={{flexDirection:'row'}}>
        <DrawerIcon />
        <Text style={{fontFamily: 'CustomFont',fontSize:18,fontWeight:'600',marginLeft:15}}>OPORTUNIDADES</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#BEC3CE" />
        </TouchableOpacity>
      </View>
      <OpportunitiesTopTab />
    </View>
  );
};

export default Opportunities;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#EAEAEF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 27,
    backgroundColor: "#fff",
  },
  headerBorder: {
    borderColor: "#ED8F03",
    width: 70,
    borderTopWidth: 3,
    marginTop: -2,
    marginLeft: 45,
  },
});
