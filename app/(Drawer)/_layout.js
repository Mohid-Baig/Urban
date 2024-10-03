import { View, Text } from 'react-native'
import React from 'react'
import {Drawer} from 'expo-router/drawer'
 import CustomDrawer from '../(Drawer)/CustomDrawer'



const CustomDrawerContent = (props)=>{
  return(
<DrawerContentScrollView {...props}>
  <DrawerItem label={'profile'} onPress={()=>router.push('(Drawer)/(tabs)/profile')}/>
</DrawerContentScrollView>
)
}
export default function _layout() {
  return (
    <Drawer screenOptions={{headerShown:false, gestureEnabled: true,}} drawerContent={(props)=> <CustomDrawer {...props} />}/>
  )
}