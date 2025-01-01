import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Salir = () => {
  return (
    <View style={styles.main}>
        <Text style={{fontSize:24}}>Salir</Text>
        <Text style={styles.text}>Page coming soon</Text>
    </View>
  )
}

export default Salir

const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        color:'#16a4dd'
    }
})