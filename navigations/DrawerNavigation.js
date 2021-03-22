import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerContent from './DrawerContent';
const Drawer = createDrawerNavigator();

function MainNavigation(){
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props} />} >
            <Drawer.Screen name="HomeScreen" component={BottomTabNavigator}/>
        </Drawer.Navigator>
    )
}

export default MainNavigation;
