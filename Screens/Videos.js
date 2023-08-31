import { Image, ImageBackground, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Styles'
import arm from '../assets/arm.jpeg'
import back from '../assets/back.png'
import { useNavigation } from '@react-navigation/native'
import play from '../assets/play.png'
import cal from '../assets/cal.png'
import { Video } from 'expo-av';
import exr from '../assets/exr.mp4'


const Videos = ({route}) => {
    const navigation = useNavigation();
    const [clickBtn, setClickBtn] = useState(true);

    const { myData } = route.params
    const [grpT, setGrpT] = useState("")

    useEffect(() => {
        setGrpT(myData);

        // This state update will only happen after the initial render
    }, [myData]); // Make sure to include 'grou
    console.log("grp", grpT);

   

    return (
        <View style={styles.container}>

                <View style={{ marginTop: 50, margin: 15,position:'absolute',zIndex:10 }}>

                    <TouchableOpacity style={[styles.borderStyle,{opacity:0.5}]} onPress={() => navigation.goBack()}>
                        <Image source={back} style={styles.bckStyle} />
                    </TouchableOpacity>

                </View>

            <Video
        source={require('/Users/amashisilva/Desktop/Yoga App/YogaApp/assets/exr.mp4')}
        style={styles.armStyle}
        resizeMode="contain"
        isLooping
        shouldPlay
      />
            <SafeAreaView style={{ margin: 10 }}>
                <View style={{ flexDirection: 'row', marginTop: -16, gap: 17 }}>
                    <View style={styles.calStyle}>
                        <Image source={play} style={styles.playStyle} />
                        <Text style={styles.playText}>  {grpT.next} </Text>
                    </View>

                    <View style={styles.calStyle}>
                        <Image source={cal} style={styles.playStyle} />
                        <Text style={styles.playText}>  {grpT.next2} </Text>
                    </View>

                </View>

                <View style={[styles.underStyle, { padding: 20 }]}>

                    <Text style={styles.titleStyle1}>{grpT.des}</Text>
                    <Text style={styles.wishStyle1}>{grpT.by}</Text>
                    <Text style={[styles.dateStyle3, { marginTop: 25, opacity: 0.4, fontSize: 15 }]}>Although this article is based on isolation arm exercises, larger push movements such as triceps dips, pushups and bench press also recruit large amounts of muscle fibres in the triceps and should be staples .</Text>

                </View>
                
            </SafeAreaView>

            {
                        clickBtn == false ? (

                            <TouchableOpacity style={[styles.WorkStyle, { opacity: 0.5 }]} onPress={() => { setClickBtn(!clickBtn) }}>
                                <View>
                                    <Text style={styles.WorkTxtStyle}>Start Workout</Text>
                                </View>
                            </TouchableOpacity>

                        ) : (
                            <TouchableOpacity style={styles.WorkStyle} onPress={() => { setClickBtn(!clickBtn) }}>
                                <View>
                                    <Text style={styles.WorkTxtStyle}>Start Workout</Text>
                                </View>
                            </TouchableOpacity>

                        )}
            

        </View>
    )
}

export default Videos

