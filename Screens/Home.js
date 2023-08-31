import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Styles'
import sam from '../assets/sam.jpeg'
import task from '../Task.json'
import map from '../assets/map.png'
import { useNavigation } from '@react-navigation/native'


const Home = () => {
    const [touch, setTouch] = useState('AllType')
    const navigation = useNavigation();
    const [typeData, setTypeData] = useState([task])



    useEffect(() => {
        const filterResult = task.filter(
            item => item.type.toLowerCase().includes(touch.toLowerCase())
        );
        setTypeData(filterResult);
    }, [touch]);



    const Category = (props) => {


        return (

            <View>
                {
                    touch == props.title ? (
                        <TouchableOpacity style={styles.coverStyle}>
                            <Text style={[styles.dateStyle1, { textAlign: 'center', opacity: 1, }]}>{props.title}</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={[styles.coverStyle, { backgroundColor: '#070F15' }]} onPress={() => setTouch(props.title)}>
                            <Text style={[styles.dateStyle1, { textAlign: 'center' }]}>{props.title}</Text>
                        </TouchableOpacity>
                    )
                }
            </View>



        )


    }
    const TaskCard = (props) => {
        return (
            <View style={{ marginBottom: 20 }}>

                <TouchableOpacity onPress={() => { navigation.navigate('Detail', { group: props }) }}>
                    <ImageBackground source={{uri:props.img}} imageStyle={styles.infoBox1} style={styles.infoBox1}>
                        <View style={{ margin: 20 }}>
                            <Text style={[styles.readyStyle1,{opacity:0.8}]}>{props.title}</Text>
                            <Text style={[styles.dateStyle1, { marginTop: 25 }]}>{props.title1}</Text>
                            <Text style={[styles.dateStyle1, { marginTop: 6 }]}>{props.title2}</Text>


                        </View>

                    </ImageBackground>

                </TouchableOpacity>


            </View>

        )
    }

    return (
        <View style={[styles.container, { backgroundColor: '#070F15' }]}>
            <SafeAreaView style={{ margin: 20 }}>
                <ScrollView  showsVerticalScrollIndicator='false' style={{ marginTop: 25 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.dateStyle}>Saturday,24 Mar</Text>
                            <Text style={styles.readyStyle}>Ready to workout?</Text>
                        </View>
                        <View style={styles.iconStyle}>
                            <Image source={sam} style={styles.iconStyle} />
                        </View>

                    </View>
                    <View style={[styles.taskStyle, { flexDirection: 'row', padding: 10 }]} >
                        <View style={styles.todayStyle}>

                            <ImageBackground source={map} imageStyle={styles.todayStyle} style={styles.todayStyle}>
                                <View style={{ padding: 20 }}>
                                    <Text style={[styles.dateStyle3, { marginTop: 10, opacity: 0.7 }]}>Today challenge</Text>
                                    <Text style={styles.readyStyle3}>42KmMarathon</Text>

                                </View>
                            </ImageBackground>


                        </View>
                        <View style={{ marginLeft: 25 }}>

                            <Text style={styles.readyStyle2}>4,087</Text>
                            <Text style={[styles.dateStyle2, { marginTop: 3 }]}>Steps</Text>

                            <Text style={[styles.readyStyle2, { marginTop: 17 }]}>1.289Kcal</Text>
                            <Text style={[styles.dateStyle2, { marginTop: 3 }]}>Cal burn</Text>

                            <Text style={[styles.readyStyle2, { marginTop: 17 }]}>289Bpm</Text>
                            <Text style={[styles.dateStyle2, { marginTop: 3 }]}>Heartbeat</Text>

                        </View>


                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between', textAlign: 'center', alignItems: 'center' }}>
                        <Text style={styles.readyStyle}>Workout Programs</Text>
                        <Text style={styles.dateStyle}>View all</Text>

                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', textAlign: 'center', alignItems: 'center' }}>

                        <Category title='AllType' />
                        <Category title='Fullbody' />
                        <Category title='Chest' />
                        <Category title='Arm' />


                    </View>


                    <View  style={styles.infoBox} gap={5}>

                        {
                            touch == "AllType" ? (
                                <View>
                                    {
                                        task.map(taskChoice => (
                                            <View key={taskChoice._id}>
                                                <TaskCard title={taskChoice.title} title1={taskChoice.title1} title2={taskChoice.title2} img={taskChoice.img}/>
                                            </View>
                                        ))
                                    }
                                </View>
                            ) : (
                                <View>
                                    {
                                        typeData.map(taskChoice => (
                                            <View key={taskChoice._id}>
                                            <TaskCard title={taskChoice.title} title1={taskChoice.title1} title2={taskChoice.title2} img={taskChoice.img} />
                                        </View>                                        ))
                                    }



                                </View>

                            )
                        }


                    </View>
                </ScrollView>
            </SafeAreaView>

        </View>
    )

}

export default Home

