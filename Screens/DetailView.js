import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Styles'
import arm from '../assets/arm.jpeg'
import back from '../assets/back.png'
import play from '../assets/play.png'
import cal from '../assets/cal.png'
import clock from '../assets/clock.png'
import fire1 from '../assets/fire1.png'
import screen from '../assets/screen.png'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';



const Progress = ({ route }) => {
    const [exData, setExData] = useState([])
    const { group } = route.params
    const [grpT, setGrpT] = useState("")
    const [grpImg,setGrpImg]=useState()
    useEffect(() => {
        setGrpT(group.title);
        setGrpImg(group.img);

        // This state update will only happen after the initial render
    }, [group]); // Make sure to include 'grou
    console.log("grp", grpT);
   

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:8070/ex/')
            setExData(response.data);
            console.log(response.data)

        }
        catch (error) {
            // Handle error here (e.g., show an error message)
            console.error('Error sending data:', error);
            alert("Error", "not save")
        }

    }
    useEffect(() => {
        getData()

    }, [])

    const navigation = useNavigation();

    const updateStatus = async (_id,props) => {
        try {
            const response = await axios.put(`http://localhost:8070/ex/${_id}`, { done: "true" });
            console.log('Status updated successfully:', response.data);
            navigation.navigate("Videos", { myData: props })
            // Perform any further actions after a successful update
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };


    const Choice = (props) => {

        console.log('Choice Component - id:', props._id);
        return (
            <View style={styles.underStyle1}>
                <View style={{ flexDirection: 'row', gap: 30 }}>

                    <Image source={{uri : props.img}} imageStyle={styles.imgStyle1} style={styles.imgStyle1} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, paddingRight: 20 }}>
                        <View>
                            <Text>
                                <Text style={[styles.wishStyle, { fontSize: 15 }]}> {props.main}</Text>

                            </Text>

                            <View style={{ flexDirection: 'row', gap: 6, marginTop: 7, alignItems: 'center' }}>
                                <Image source={clock} style={styles.clckStyle} />
                                <Text style={[styles.wishStyle, { fontSize: 14, opacity: 0.5 }]}>{props.next}</Text>

                            </View>

                            <View style={{ flexDirection: 'row', gap: 6, marginTop: 6 }}>
                                <Image source={fire1} style={styles.clckStyle} />
                                <Text style={[styles.wishStyle, { fontSize: 14, opacity: 0.5 }]}>{props.next2}</Text>

                            </View>

                        </View>
                        <TouchableOpacity onPress={() => updateStatus(props._id,props)} style={{ justifyContent: 'center', width: 35, height: 35, backgroundColor: '#384127', borderRadius: 20, alignItems: 'center', margin: 15 }}>
                            <Image source={play} style={styles.playStyle1} />
                        </TouchableOpacity>
                    </View>




                </View>

                <View style={styles.ruler1} />

            </View>
        )
    }




    return (
        <View style={styles.container}>
            <ImageBackground source={{uri:grpImg}} imageStyle={styles.imgStyle} style={styles.imgStyle}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50, margin: 15 }}>

                    <TouchableOpacity style={styles.borderStyle} onPress={() => navigation.navigate('Home')}>
                        <Image source={back} style={styles.bckStyle} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.borderStyle}>
                        <Image source={screen} style={styles.bckStyle1} />
                    </TouchableOpacity>

                </View>
            </ImageBackground>

            <SafeAreaView style={{ margin: 10 }}>
                <Text style={styles.titleStyle}>{group.title}</Text>

                <View style={{ flexDirection: 'row', marginTop: 12, gap: 10 }}>
                    <View style={styles.calStyle}>
                        <Image source={play} style={styles.playStyle} />
                        <Text style={styles.playText}>  1hr23min</Text>
                    </View>

                    <View style={styles.calStyle}>
                        <Image source={cal} style={styles.playStyle} />
                        <Text style={styles.playText}>  380 Cal</Text>
                    </View>

                </View>
                <Text style={[styles.dateStyle3, { marginTop: 15, opacity: 0.5, fontSize: 14 }]}>Improves your body shape to be more ideal with various tutorial videos for you that can help and achive goals.</Text>

                <View style={{ flexDirection: 'row', marginTop: 17, gap: 10 }}>
                    <TouchableOpacity style={styles.addStyle}>
                        <Text style={styles.wishStyle}>Add to wishlist</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.addStyle}>
                        <Text style={styles.wishStyle}>Share</Text>

                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, paddingHorizontal: 10, marginBottom: -5 }}>
                    <Text style={[styles.wishStyle, { fontSize: 16 }]}>Episode</Text>
                    <Text style={[styles.wishStyle, { fontSize: 16, opacity: 0.5 }]}>1-10</Text>

                </View>

                <ScrollView style={styles.underStyle}>
                    <View>
                        {
                            exData.map(detailChoice => (
                                <View>
                                    {
                                        detailChoice.category == grpT && (
                                            <View style={{ flex: 1 }} key={detailChoice._id}>
                                                <Choice
                                                    _id={detailChoice._id}
                                                    main={detailChoice.main}
                                                    next={detailChoice.next}
                                                    next2={detailChoice.next2}
                                                    des={detailChoice.des}
                                                    by={detailChoice.by}
                                                    img={detailChoice.img}
                                                />
                                            </View>
                                        )
                                    }
                                </View>
                            ))
                        }
                    </View>
                </ScrollView>







            </SafeAreaView>
        </View>
    )
}

export default Progress

