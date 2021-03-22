import React from 'react'
import { View } from 'react-native'
import { Title } from 'react-native-paper';


const ListDistrictHospitalsScreen = ({ route,navigation }) => {
    const { dist } = route.params;
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Title>{dist ? dist : 'Blank screen'}</Title>
        </View>
    )
}

export default ListDistrictHospitalsScreen
