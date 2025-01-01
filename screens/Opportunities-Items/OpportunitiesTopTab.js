import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const Tab = createMaterialTopTabNavigator();

const OpportunitiesTopTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: '#ED8F03', 
          height: 2, 
          width: '20%', 
          left: '5%', 
        },
        tabBarLabel: () => null,
        tabBarStyle: {
          height: 1.5,
          backgroundColor: 'transparent', 
          justifyContent: 'center', 
        },
      }}
    >
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Tab3" component={Tab3} />
      {/* <Tab.Screen name="Tab2" component={Tab2} /> */}
    </Tab.Navigator>
  );
};

export default OpportunitiesTopTab;

const styles = StyleSheet.create({});
