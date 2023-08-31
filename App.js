import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Screens/Welcome';
import Home from './Screens/Home';
import Navbar from './Screens/Navbar';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useIsFocused, useNavigation } from '@react-navigation/native';
import Progress from './Screens/Progress';
import Calender from './Screens/Supliment';
import User from './Screens/User';
import DetailView from './Screens/DetailView';
import Supliment from './Screens/Supliment';
import Videos from './Screens/Videos';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';

import { useEffect, useState } from 'react';

export default function App() {
  const Stack = createNativeStackNavigator()

  function ScreenNameTracker() {
    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [currentScreenName, setCurrentScreenName] = useState("");

    useEffect(() => {
      if (isFocused) {
        const currentRoute = navigation.getCurrentRoute();
        setCurrentScreenName(currentRoute.name);
      }
    }, [isFocused, navigation]);

    useEffect(() => {
      const unsubscribe = navigation.addListener("state", () => {
        const currentRoute = navigation.getCurrentRoute();
        setCurrentScreenName(currentRoute.name);
      });
      console.log(currentScreenName);

      return unsubscribe;
    }, [navigation]);

    // if (currentScreenName !== "music") {
    //   return (
    //     <View style={styles.btmnav}>
    //       <Navbar />
    //     </View>
    //   );
    // } else {
    //   <View style={styles.btmnav}>
    //     <Navbar />
    //   </View>;
    // }

    switch (currentScreenName) {
      case "Notification":
        return (
          <View style={styles.btmnav}>
            <View style={styles.BottomNavBar}></View>
          </View>
        );
      case "Detail":
      case "Videos":
      case "SignUp":
      case "Login":
        case "Welcome":




        return (
          <View style={styles.btmnav}>
          </View>
        );
      default:
        return (
          <View style={styles.btmnav}>
            <View style={styles.BottomNavBar}>
              <Navbar />
            </View>
          </View>
        );
    }

  }



  return (

    <View style={styles.container1}>
      <NavigationContainer >


        <Stack.Navigator screenOptions={{ animationEnabled: false, gestureEnabled: false, }}>

          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Progress" component={Progress} options={{ headerShown: false }} />
          <Stack.Screen name="Supliment" component={Supliment} options={{ headerShown: false }} />
          <Stack.Screen name="User" component={User} options={{ headerShown: false }} />
          <Stack.Screen name="Detail" component={DetailView} options={{ headerShown: false }} />
          <Stack.Screen name="Videos" component={Videos} options={{ headerShown: false }} />

        </Stack.Navigator>


        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <ScreenNameTracker />
        </View>


      </NavigationContainer>


      <StatusBar style="light" />
    </View>



  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
