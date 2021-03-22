import React from 'react'
import { View,StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';
import {  Title,Paragraph,Button } from 'react-native-paper';


const SplashScreen = ({ navigation }) => {
    return (
        <View style={{flex:1}}>
            <View style={styles.header}>
                <Title style={{textAlign:"center"}}>Venture</Title>
                <LottieView source={require('../../assets/splash.json')} autoPlay loop />
            </View>
            <View style={styles.footer}>
                <Title style={{textAlign:"center"}}>Leads Venture Labs</Title>
                <Paragraph  style={{textAlign:"center",opacity:0.6}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum</Paragraph>
                <Button onPress={()=>navigation.navigate('Signup')} theme={{roundness:20}} style={{marginVertical:18}} raised mode="contained" dark={true} >Continue</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flex:4
    },
    footer:{
        flex:2,
        padding:10
    }

})

export default SplashScreen
