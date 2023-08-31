import { Alert, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../Styles'
import sam from '../assets/sam.jpeg'
import logo from '../assets/logo.png'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
import { useNavigation } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../FirebaseConfig'
import axios from 'axios'

const SignUp = () => {


    const [Name, setName] = useState()
    const [Age, setAge] = useState()
    const [Email, setEmail] = useState()
    const [Phone, setPhone] = useState()
    const [Password, setPassword] = useState()
    const [press,setPress]=useState()
    const [Ok, setOk] = useState()
    const auth = FIREBASE_AUTH;

    const navigation=useNavigation('');

    const signUp = async () => {
    
        try {
          const response = await createUserWithEmailAndPassword(
            auth,
            Email,
            Password
          );
          console.log(response);
          sendData();
          alert("Check your emails !");

        } catch (error) {
          console.log(error);
          alert("Sign up failed :" + error.message);
        } finally {
        }
      };

    const sendData = async () => {
        // Perform validation
        if (!Name || !Age || !Email || !Phone) {
            Alert.alert('Validation Error', 'All fields are required');
            return;
        }

        if (!/^\d+$/.test(Age)) {
            Alert.alert('Validation Error', 'Age must be a valid number');
            return;
        }

        if (!/^\d{10}$/.test(Phone)) {
            Alert.alert('Validation Error', 'Phone number must be 10 digits');
            return;
        }

        // Send data if validation passes
        try {
            const response = await axios.post('http://localhost:8070/users/', {
                name: Name,
                age: Age,
                email: Email,
                phone: Phone,
            });

            // Handle response here (e.g., show a success message)
            console.log('Data sent successfully:', response.data);
            alert("Successfull", "User added successfully")
            setName(""),
                setAge(""),
                setEmail(""),
                setPhone("")
        } catch (error) {
            // Handle error here (e.g., show an error message)
            console.error('Error sending data:', error);
            alert("Error", "not save")
        }
    };

    return (

        <View style={[styles.Container, { backgroundColor: '#000'}]}>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <SafeAreaView style={{ margin: 15 }}>
                    <ScrollView showsVerticalScrollIndicator='false'>

                        <View >

                            <Image source={logo} style={styles.img} />
                            <Text style={styles.log}>Sign-Up</Text>


                            <Text style={styles.txt}>Name</Text>

                            <TextInput

                                style={styles.input}
                                placeholderTextColor={'#888A8C'}
                                placeholder="Your Name"
                                autoCapitalize="none"
                                onChangeText={(text) => setName(text)}

                            ></TextInput>

                            <Text style={[styles.txt, { marginVertical: 12 }]}>Age</Text>
                            <TextInput

                                style={styles.input}
                                placeholder="Your Age"
                                placeholderTextColor={'#888A8C'}
                                autoCapitalize="none"

                                onChangeText={(text) => setAge(text)}
                            ></TextInput>



                            <Text style={[styles.txt, { marginVertical: 12 }]}>Email</Text>
                            <TextInput

                                style={styles.input}
                                placeholder="Your Email Address"
                                placeholderTextColor={'#888A8C'}
                                autoCapitalize="none"

                                onChangeText={(text) => setEmail(text)}
                            ></TextInput>
                            <Text style={[styles.txt, { marginVertical: 12 }]}>Phone number</Text>

                            <TextInput value={Phone}
                                placeholder=' Phone Number'
                                style={styles.input}
                                placeholderTextColor={'#888A8C'}
                                autoCapitalize="none"
                                onChangeText={(text) => setPhone(text)}>

                            </TextInput>


                            <Text style={[styles.txt, { marginVertical: 12 }]}>Password</Text>
                            <TextInput

                                style={styles.input}
                                placeholder="password"
                                placeholderTextColor={'#888A8C'}
                                autoCapitalize="none"
                                secureTextEntry={true}
                                onChangeText={(text) => setPassword(text)}
                            ></TextInput>

                            <View style={{ marginVertical: 15 }}>
                                <TouchableOpacity style={styles.btnLog} onPress={()=>{ signUp()}}>
                                    <Text style={styles.lgTxt}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity  onPress={()=>{navigation.navigate('Login')}}>
                                <Text style={styles.signTxt}> back to login</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </SafeAreaView>

            </KeyboardAvoidingView>
        </View >
    )
}

export default SignUp

