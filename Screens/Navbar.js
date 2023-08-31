import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../Styles'
import home1 from '../assets/home1.png'
import home2 from '../assets/home2.png'
import progress1 from '../assets/progress1.png'
import progress2 from '../assets/progress2.png'
import calendar1 from '../assets/calendar1.png'
import calendar2 from '../assets/calendar2.png'
import user1 from '../assets/user1.png'
import user2 from '../assets/user2.png'
import sup1 from '../assets/sup1.png'
import sup2 from '../assets/sup2.png'
import { useNavigation } from '@react-navigation/native'



const Navbar = () => {
    const [choice, setChoice] = useState('Home')
    const navigation=useNavigation()
    

    const NavChoice = (props) => {
        return (
            <View style={styles.navContainer}>
                {
                    choice == props.title ? (
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Image source={props.icon2} style={styles.homeStyle} />
                            <Text style={styles.homeText1}>{props.title}</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{setChoice(props.title), navigation.navigate(props.nav)}}>
                            <Image source={props.icon1} style={styles.homeStyle} />
                            <Text style={styles.homeText}>{props.title}</Text>
                        </TouchableOpacity>
                    )
                }




            </View>


        )
    }
    return (
        <View >
            <NavChoice />
            <View style={styles.navBar}>
                <NavChoice title='Home' icon1={home1} icon2={home2} nav={'Home'}/>
                <NavChoice title='Progress' icon1={progress1} icon2={progress2} nav={'Progress'}/>
                <NavChoice title='Supliment' icon1={sup1} icon2={sup2} nav={'Supliment'}/>
                <NavChoice title='User' icon1={user1} icon2={user2} nav={'User'}/>

            </View>



        </View>
    )
}

export default Navbar

