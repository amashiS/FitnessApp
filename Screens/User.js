import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import sam from '../assets/sam.jpeg'
import warning from '../assets/warning.png'
import check from '../assets/check.png'
import arrow from '../assets/arrow.png'
import password from '../assets/password.png'
import help from '../assets/help.png'
import i from '../assets/i.png'



const User = () => {
  return (
    <View style={{ backgroundColor: '#070F15', width: '100%', height: '100%' }}>
      <SafeAreaView>
        <View style={styles.UserStyle}>
          <View style={styles.UserIStyle}><Image source={sam} style={styles.usStyle} /></View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}><Text style={styles.nameStyle}>Dinith Perera  </Text>
            <Image source={check} style={styles.DoneStyle} />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: -7 }}>
            <Text style={styles.mailStyle}>Dinithperera@gmail.com</Text>

          </View>

          <View style={styles.dataStyle}>

            <View style={styles.dataStyle1}>
              <Text style={styles.data}>Email</Text>
              <TouchableOpacity>
                <Image source={arrow} style={styles.ArrowStyle} />
              </TouchableOpacity>
            </View>
            <View style={styles.line} />

            <View style={styles.dataStyle2}>
              <Text style={styles.data}>Country</Text>
              <TouchableOpacity>
                <Image source={arrow} style={styles.ArrowStyle} />
              </TouchableOpacity>
            </View>
            <View style={styles.line} />




            <View style={styles.dataStyle3}>
              <Text style={styles.data}>Telephone</Text>
              <TouchableOpacity>
                <Image source={arrow} style={styles.ArrowStyle} />
              </TouchableOpacity>
            </View>




          </View>

          <View>

            <View style={styles.secoundStack}>
              <View style={styles.reusable}>
                <Image source={warning} style={[styles.Icon,{width:22,height:22}]} />

                <Text style={styles.data}>   Crisis support</Text>
              </View>

              <TouchableOpacity>
                <Image source={arrow} style={styles.ArrowStyle1} />
              </TouchableOpacity>
            </View>

            <View style={styles.NewDataStyle}>

              <View style={styles.dataStyle1}>
                <View style={styles.reusable}>
                  <Image source={password} style={[styles.Icon,{width:22,height:22}]} />

                  <Text style={styles.data}>   Change password</Text>
                </View>
                <TouchableOpacity>
                  <Image source={arrow} style={styles.ArrowStyle1} />
                </TouchableOpacity>
              </View>

              <View style={styles.dataStyle2}>
                <View style={styles.reusable}>
                  <Image source={help} style={[styles.Icon,{width:23,height:23}]} />

                  <Text style={styles.data}>   Help</Text>
                </View>
                <TouchableOpacity>
                  <Image source={arrow} style={styles.ArrowStyle1} />
                </TouchableOpacity>
              </View>




              <View style={styles.dataStyle3}>
                <View style={styles.reusable}>
                  <Image source={i} style={styles.Icon} />

                  <Text style={styles.data}>   Yoga </Text>
                </View>
                <TouchableOpacity>
                  <Image source={arrow} style={styles.ArrowStyle1} />
                </TouchableOpacity>
              </View>
            </View>




          </View>

        </View>
      </SafeAreaView>
    </View>
  )
}

export default User

const styles = StyleSheet.create({
  UserStyle: {
    padding: 20,


  },
  UserTxtStyle: {
    margin: 14,
    textAlign: "center",
    fontSize: 19,
    fontWeight: 700
  },
  UserIStyle: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    marginVertical: 10


  },
  usStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: '#C4D8EC'

  },
  nameStyle: {
    fontSize: 18,
    marginVertical: 1,
    color: '#fff',
    marginBottom: 5,
    fontWeight: '600'
  },
  mailStyle: {
    fontSize: 14,
    marginVertical: 6,
    color: '#B2B2B2'
  },
  DoneStyle: {
    width: 13,
    height: 13
  },
  NewDataStyle: {
    width: '100%',
    borderRadius: 20,
    marginTop: 5,


  },
  dataStyle: {
    marginVertical: 30,
    width: '100%',
    borderRadius: 20
  },
  dataStyle1: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#12171B',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15

  },
  secoundStack: {
    width: '100%',
    backgroundColor: '#12171B',
    alignItems: 'center',
    marginVertical: -13,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 5
  },
  dataStyle2: {
    width: '100%',
    backgroundColor: '#12171B',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15


  },
  dataStyle3: {
    width: '100%',
    backgroundColor: '#12171B',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15

  },
  line: {
    width: '100%',
    height: 1.5,
    backgroundColor: '#1B242B',

  },
  ArrowStyle: {
    width: 10,
    height: 10
  },
  ArrowStyle1: {
    width: 10,
    height: 10,
    justifyContent: 'flex-end'
  },
  data: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 500,
    opacity: 0.6
  },
  Icon: {
    width: 20,
    height: 20,
  },
  reusable: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})