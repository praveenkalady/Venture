import React,{ useState,useEffect } from 'react'
import { View, StyleSheet,KeyboardAvoidingView,Pressable } from 'react-native'
import { Title,TextInput,Button,HelperText } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import LottieView from 'lottie-react-native';

const SignupScreen = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [eye1,setEye1] = useState(false);
    const [eye2,setEye2] = useState(false);
    const [errors,setErrors] = useState(null);
    const [isError,setIsError] = useState(false);
    const validateEmail = (email)=> {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    const handleSubmit = () => {
        if(!email && !password && !confirmPassword){
            setErrors({field:"all",message:"Please fill the form !"});
            setIsError(true);
        } else if (!email) {
            setErrors({field:"email",message:"Please enter your email"});
            setIsError(true);
        }
        else if(!validateEmail(email)){
            setErrors({field:"email",message:"Please enter a valid email"});
            setIsError(true);
        }
        else if(!password){
            setErrors({field:"password",message:"Please create a strong password !"});
            setIsError(true);
        } else if(!confirmPassword){
            setErrors({field:"confirm",message:"Please confirm your password !"});
            setIsError(true);
        } else if (password !== confirmPassword){
            setErrors({field:"confirm",message:"Passwords doesn't match !"});
            setIsError(true);
        } else {
            setErrors(null);
            setEye1(false);
            setEye2(false);
        }
    }
    return (
        <View style={{flex:1}}>
            <View style={styles.header}>
                <LottieView source={require('../../assets/signup.json')} autoPlay loop />
            </View>
            <KeyboardAvoidingView behavior="padding" style={styles.footer}>
                <Title style={{textAlign:"center",fontSize:25,fontWeight:'500',marginBottom:10}}>Create Your Account</Title>
               <View style={styles.inputContainer}>
                <TextInput onChangeText={(text)=> setEmail(text)} left={<TextInput.Icon name="email" size={24} color="black" />} mode="outlined" label="Email" />
                <HelperText type="error" visible={errors?.field ==="email" || errors?.field === "all" ? true : false} >
                    {errors?.message}
                </HelperText>
                <TextInput onChangeText={(text)=> setPassword(text)}  left={<TextInput.Icon name="lock" size={24} color="black" />} right={<TextInput.Icon onPress={()=>setEye1(!eye1)} name={eye1 ? 'eye' : 'eye-off'  }  />} secureTextEntry={eye1 ? false : true} mode="outlined" label="Password" />
                <HelperText type="error" visible={errors?.field ==="password" || errors?.field === "all" ? true : false} >
                    {errors?.message}
                </HelperText>
                <TextInput onChangeText={(text)=> setConfirmPassword(text)} right={<TextInput.Icon onPress={()=> setEye2(!eye2)} name={eye2 ? 'eye' : 'eye-off'} size={24} color="black" />} left={<TextInput.Icon name="lock" size={24} color="black" />}  secureTextEntry={eye2 ? false : true} mode="outlined" label="Confirm Password" />
                <HelperText type="error" visible={errors?.field ==="confirm" || errors?.field === "all" ? true : false} >
                    {errors?.message}
                </HelperText>
               </View>
                <Button onPress={handleSubmit} theme={{roundness:20}} mode="contained" dark={true} >Create Account</Button>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flex:2,
    },
    footer:{
        flex:4,
        padding:10
    },
    inputContainer:{
        marginBottom:10
    }
})

export default SignupScreen
