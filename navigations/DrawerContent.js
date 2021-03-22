import React,{ useState } from 'react';
import { View,StyleSheet } from 'react-native';
import { Avatar, Drawer,Subheading,Switch,TouchableRipple,Text } from 'react-native-paper';
import { DrawerItem,DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const DrawerContent = (props) => {
    const [isToggle,setIsToggle] = useState(false);
    const handleToggle = () => {
        setIsToggle(!isToggle);
    }
    return (
        <View style={{flex:1,padding:10}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.user}>
                   <Avatar.Text size={50} label="PR" />
                   <Subheading>praveen@gmail.com</Subheading>
                </View>
                <Drawer.Section>
                <DrawerItem onPress={()=>props.navigation.navigate('Home')}  label="Home" icon={({ color,size })=>(<Icon name="home" size={size} color={color} />)} />
                <DrawerItem onPress={()=>props.navigation.navigate('About')}  label="About" icon={({ color,size })=>(<Icon name="information-circle-outline" size={size} color={color} />)} />
                </Drawer.Section>
                <Drawer.Section style={{marginTop:10}} title="Preferences" >
                    <TouchableRipple onPress={handleToggle} >
                        <View style={styles.preferences} >
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={isToggle} />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem style={{borderWidth:1,borderColor:"grey"}} label="Sign out" icon={({ color,size })=>(<Icon name="log-out-outline" size={size} color={color} />)} />
            </Drawer.Section>
        </View>
    )
}


const styles = StyleSheet.create({
    user:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginBottom:30
    },
    preferences:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    }
})

export default DrawerContent;