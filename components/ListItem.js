import React,{ useState } from 'react'
import { StyleSheet,View } from 'react-native';
import { Card,Title,Button } from 'react-native-paper'

const ListItem = ({ title,navigation }) => {
    const [value,setValue] = useState('');
    return (
        <Card elevation={3} style={{marginBottom:10}}>
            <Card.Content>
                <View style={styles.content}>
                    <Title>{title}</Title>
                    <Button onPress={()=> navigation.navigate('District',{dist:title})} dark={true} raised theme={{roundness:20}} mode="contained">Select</Button>
                </View>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    content:{
        flexDirection:"row",
        padding:10,
        justifyContent:"space-between"
    }
})

export default ListItem
