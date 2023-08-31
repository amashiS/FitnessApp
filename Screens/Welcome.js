import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {styles} from '../Styles'
import main from '../assets/main.png'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
        <Image source={main} style={styles.mainStyle}/>
        <Text style={styles.mainTitStyle}>Move your body away from beddy</Text>
        <Text style={[styles.nextStyle,{marginTop:12}]}>With this application you will  be able to improve your healthy lifestyle by exercising</Text>

        <TouchableOpacity  style={styles.pressStyle} onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.btnText}>Let's move now</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row',marginTop:45,justifyContent:'center'}}>
        <Text style={styles.nextStyle1}>Already have account?</Text>
        <TouchableOpacity>
        <Text style={styles.signStyle}> Sign in</Text>

        </TouchableOpacity>
        </View>
        
    </View>
  )
}

export default Welcome

