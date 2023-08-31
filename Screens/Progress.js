import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Styles'
import axios from 'axios'
import done from '../assets/done.png'
import arm from '../assets/arm.jpeg'





const Progress = () => {
  const [exData, setExData] = useState([])

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


  return (
    <View style={styles.container}>
      <SafeAreaView style={{ marginTop: 120 }}>
        <ScrollView showsVerticalScrollIndicator='false' style={[styles.progStyle, { padding: 10 }]}>
          <Text style={[styles.readyStyle, { fontSize: 22 }]}>Your progress</Text>


          <View>

            {
              exData.map(i => (
                <View >
                  {
                    i.done == "true" && (
                      <View style={styles.progStyle1}>
                        <Image source={arm} style={styles.pImgStyle} />
                        <View style={{ flexDirection: 'column' }} >
                          <Text style={{ color: '#fff', opacity: 0.8, fontSize: 15 }}>{i.main}</Text>
                          <Text style={{ color: '#fff', opacity: 0.3, width: 170, fontSize: 13, marginTop: 5 }}>{i.des}video done watching</Text>

                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 10, gap: 7, marginTop: -40, alignItems: 'center' }} >
                          <Text style={{ color: '#fff', opacity: 0.6 }}>{i.next} </Text>
                          <Image source={done} style={styles.donestyle} />


                        </View>


                      </View>
                    )
                  }
                  <View style={styles.ruler2} />
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

