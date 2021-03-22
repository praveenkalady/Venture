import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ListDistrictHospitalsScreen from '../screens/ListDistrictHospitalsScreen';
import ContinueScreen from '../screens/ContinueScreen';
import Opscreen from '../screens/OpScreen';
import OpDetailsScreen from '../screens/OpDetailsScreen';
import AboutScreen from '../screens/AboutScreen';
import Icon from 'react-native-vector-icons/Feather';
import SplashScreen from '../screens/auth/SplashScreen';
import SignupScreen from '../screens/auth/SignupScreen';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator();

export function HomeScreenStack({ navigation }) {
    return (
        <Stack.Navigator screenOptions={{headerLeft:()=>(<Icon.Button name="menu" onPress={()=>navigation.toggleDrawer()} style={{backgroundColor:"white"}} color="black" size={28} />)}} initialRouteName="Home" >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="District" component={ListDistrictHospitalsScreen} />
        </Stack.Navigator>
    )
}

export function ListDistrictHospitalsStack() {
    return (
        <Stack.Navigator initialRouteName="District" >
            <Stack.Screen name="District" component={ListDistrictHospitalsScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Continue" component={ContinueScreen} />
        </Stack.Navigator>
    )
}

export function ContinueStack() {
     return (
         <Stack.Navigator initialRouteName="Continue" >
             <Stack.Screen name="Continue" component={ContinueScreen} />
             <Stack.Screen name="District" component={ListDistrictHospitalsScreen} />
             <Stack.Screen name="Op" component={Opscreen} />
         </Stack.Navigator>
     )
}

export function OpStack(){
    return (
        <Stack.Navigator initialRouteName="Op" >
            <Stack.Screen name="Op" component={Opscreen} />
            <Stack.Screen name="Continue" component={ContinueScreen} />
            <Stack.Screen name="Details" component={OpDetailsScreen} />
        </Stack.Navigator>
    )
}



export function OpDetailsStack(){
    return (
        <Stack.Navigator initialRouteName="Details">
            <Stack.Screen name="Details" component={OpDetailsScreen} />
            <Stack.Screen name="Op" component={Opscreen} />
        </Stack.Navigator>
    )
}

export function AboutStack ({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="About" screenOptions={{headerLeft:()=>(<Icon.Button onPress={()=> navigation.toggleDrawer()} style={{backgroundColor:"white"}} color="black" name="menu" size={28} />)}}>
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    )
}

export function AuthNavigator(){
    return (
        <Stack.Navigator initialRouteName="Splash" headerMode="none" >
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}