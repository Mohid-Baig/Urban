import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { router, useNavigation } from "expo-router";
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions } from "@react-navigation/native";

const DrawerIcon = () => {
    const navigation = useNavigation();
  const onToggle = () =>{
navigation.dispatch(DrawerActions.openDrawer());
  }
  return (
    <View>
     <TouchableOpacity onPress={()=>onToggle()}>
          <MaterialIcons name="menu" size={24} color={'#000'} />
          </TouchableOpacity>
    </View>
  )
}

export default DrawerIcon

const styles = StyleSheet.create({})