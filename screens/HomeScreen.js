import React,{ useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Title,Searchbar } from 'react-native-paper';
import ListItem from '../components/ListItem';


const data = ['Malappuram','Kozhikode','Trivandram','Alappuzha','Idukki','Pathanamthitta','Kottayam','Kollam','Eranakulam','Trissur','Kannur','Wayanad','Kasargod','Palakkad'];

const HomeScreen = ({ navigation }) => {
    
    const [districts,setDistricts] = useState(data);
    const [searchQuery,setSearchQuery] = useState('');
    const onChangeSearch = query => {
        setSearchQuery(query)
        if(query !== ''){
            const filteredData = districts.filter(el => el.toLowerCase().startsWith(String(query).toLowerCase()));
            setDistricts(filteredData);
        } else {
            setDistricts(data);
        }
    };
  
    return (
        <ScrollView style={{flex:1,padding:10,marginBottom:5}}>
            <Searchbar  value={searchQuery} onChangeText={onChangeSearch} placeholder="Find your districts..." />
                {districts.map((title,i)=>(
                    <ListItem navigation={navigation} title={title} key={i} />
                ))}
        </ScrollView>
    )
}

export default HomeScreen
