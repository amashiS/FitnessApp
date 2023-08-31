import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../Styles'
import search from '../assets/search.png'
import supply from '../assets/supply.png'
import supply2 from '../assets/supply2.png'
import cart from '../assets/cart.png'
import cart1 from '../assets/cart1.png'
import love from '../assets/love.png'
import muscle from '../muscle.json'
import love1 from '../assets/love1.png'



const Supliment = () => {
  const [searchInput, setSearchInput] = useState("")
  const [filterData, setFilterData] = useState(muscle)

  const filterInput = (query) => {

    setSearchInput(query)

    const fiterResults = muscle.filter(
      (item) =>
        item.tit.toLowerCase().includes(query.toLowerCase())
    )
    setFilterData(fiterResults)
  }
  
  const Musc = (props) => {
    const [press, setPress] = useState(false)

    return (
      <View>
        <Pressable style={styles.prs1}>
          <Image source={{uri:props.image}} style={styles.supplyStyle} />
          <Text style={[styles.readyStyle2, { fontSize: 16, opacity: 0.7 }]}>{props.tit}</Text>
          <Text style={[styles.dateStyle2, { fontSize: 14, opacity: 0.3, marginTop: 5 }]} >{props.tit1}</Text>
          <View style={{ flexDirection: 'row', gap: 7, marginTop: 10 }}>
            <Text style={styles.dolStyle}>$</Text>

            <View style={{ flexDirection: 'row', gap: 45, alignItems: 'center' }}>
              <Text style={[styles.readyStyle2, { fontSize: 20 }]}>{props.tit2}</Text>

              {press == true ? (
                <TouchableOpacity onPress={() => { setPress(!press) }}>
                  <View>
                    <Image source={love1} style={styles.cartSyle} />
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => { setPress(!press) }}>
                  <View>
                    <Image source={love} style={styles.cartSyle} />
                  </View>
                </TouchableOpacity>
              )}




            </View>



          </View>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={[styles.container, { backgroundColor: '#060F15' }]}>
      <SafeAreaView style={{ margin: 10 }}>
        <Text style={[styles.readyStyle1, { fontSize: 24, width: 230, marginTop: 10, fontWeight: '700' }]}>Ask us for the best supplements</Text>

        <View style={styles.inputStyle}>
          <Image source={search} style={styles.searchStyle} />
          <TextInput value={searchInput} onChangeText={filterInput} style={[styles.dateStyle2, { fontSize: 14, flex: 1 }]} placeholder='Search all you need ...' placeholderTextColor={'#fff'} />
        </View>

        <Text style={{ color: '#fff' }}>{searchInput}</Text>

        <ScrollView showsHorizontalScrollIndicator='false'  >
          <View style={[styles.flxStyle, { paddingBottom: 200 }]}>

            {
              filterData.map(muscChoice => (
                <Musc key={muscChoice.tit} tit={muscChoice.tit} tit1={muscChoice.tit1} tit2={muscChoice.tit2} image={muscChoice.image}/>

              ))

            }


          </View>
        </ScrollView>

      </SafeAreaView>
    </View>
  )
}

export default Supliment

