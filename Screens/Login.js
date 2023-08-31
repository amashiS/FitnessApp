import { ActivityIndicator, Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../Styles'
import logo from '../assets/logo.png'
import gmail from '../assets/gmail.png'
import fb from '../assets/fb.png'
import { useNavigation } from '@react-navigation/native'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from '../FirebaseConfig'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const auth = FIREBASE_AUTH;


    const signIn = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert("Check your emails !");
            navigation.navigate("Home")
        } catch (error) {
            console.log(error);
            alert("Sign in failed :" + error.message);
        } finally {
        }
    };


    return (

        <View style={[styles.Container, { backgroundColor: '#000', flex: 1, padding: 10 }]}>
            <SafeAreaView >
                <Image
                    source={logo} style={styles.img} />
                <Text style={styles.log}>Log-In</Text>

                <KeyboardAvoidingView behavior="padding">
                    <Text style={styles.txt}>Email</Text>

                    <TextInput
                        value={email}
                        style={styles.input}
                        placeholder="Your Email Id"
                        autoCapitalize="none"
                        placeholderTextColor={'#888A8C'}
                        onChangeText={(text) => setEmail(text)}
                    ></TextInput>

                    <Text style={[styles.txt, { marginVertical: 12 }]}>Password</Text>
                    <TextInput
                        value={password}
                        style={styles.input}
                        placeholder="password"
                        autoCapitalize="none"
                        placeholderTextColor={'#888A8C'}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    ></TextInput>

                    <TouchableOpacity >
                        <Text style={styles.frgot} >Forgot password?</Text>
                    </TouchableOpacity>

                    {loading ? (
                        <ActivityIndicator size="large" color="#00ff" />
                    ) : (
                        <>
                            <TouchableOpacity style={[styles.btnLog, { marginTop: 80 }]} onPress={() => signIn()}>
                                <Text style={styles.lgTxt}>Login</Text>
                            </TouchableOpacity>

                            <View style={{flexDirection:'row',marginTop:45,justifyContent:'center',alignItems:'center'}}>
                                <Text style={[styles.signTxt]} >
                                    Don't have an account?
                                </Text>
                                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                                    <Text style={styles.signStyle}> Sign in</Text>

                                </TouchableOpacity>

                            </View>

                        </>
                    )}
                </KeyboardAvoidingView>

                <View style={{ flexDirection: "row",gap:5 }}>
                    <View style={styles.ruler} />
                    <Text style={styles.orTxt}> Or login with </Text>
                    <View style={styles.ruler} />
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'center', gap: 15, alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity>
                    <Image source={gmail} style={styles.icnStyle} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <Image source={fb} style={styles.icnStyle} />
                    </TouchableOpacity>

                </View>

            </SafeAreaView>

        </View>
    )
}

export default Login

