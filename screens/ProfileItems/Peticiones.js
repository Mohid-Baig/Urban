import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Peticiones = () => {
  return (
    <View style={styles.main}>
    <Text style={styles.text}>Coming soon</Text>
</View>
  )
}

export default Peticiones

const styles = StyleSheet.create({
  main:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  text:{
      fontSize: 12,
      fontWeight: 'bold'
  }
})