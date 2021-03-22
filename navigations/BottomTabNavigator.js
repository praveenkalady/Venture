import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreenStack,AboutStack } from './StackNavigations';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen options={{tabBarIcon:({color,size})=>(<Icon name="home" size={size} color={color} />)}} name="Home" component={HomeScreenStack}/>
            <Tab.Screen options={{tabBarIcon:({color,size})=>(<Icon name="information-circle-outline" size={size} color={color} />)}} name="About" component={AboutStack}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;