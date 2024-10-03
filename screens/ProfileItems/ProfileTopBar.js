import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Catalogo from './Catalogo';
import Peticiones from './Peticiones';
import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();

const ProfileTopBar = () => {
  return (
    <View style={styles.screenContainer}>
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.containerStyle,
        tabBarIndicatorStyle: styles.indicator,
        tabBarLabelStyle: { fontSize: 14, fontWeight: "bold" },
      }}
    >
      <Tab.Screen name="Catalogo" component={Catalogo} />
      <Tab.Screen name="Peticiones" component={Peticiones} />
    </Tab.Navigator>
    </View>
  );
};

export default ProfileTopBar;

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#F2F4F9',
    height: 50,
    borderRadius: 5,
    width: 332, 
    justifyContent: 'space-between',
    alignSelf: 'center', 
  },
  screenContainer: {
    width: 332, 
    alignSelf: 'center', 
    flex: 1,
    marginTop:10,
  },
  indicator:{
    backgroundColor: '#fff',
    position: 'absolute',
    zIndex: -1,
    bottom: '15%', 
    height: 36,
    width: 150,
    borderRadius:5,
    marginLeft:8,
  justifyContent:'center',
  alignItems:'center',
  alignSelf:'center'
  }
});