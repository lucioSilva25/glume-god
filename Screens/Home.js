import React from 'react'
import { View, Text, Button } from 'react-native'
const Home = ({navigation}) => {
    return (
        <View>
            
            <Button
                title='Ir a mi perfil'
                onPress = {()=>{navigation.navigate('Login')}}
            />
            <Button
                title='Graficos'
                onPress = {()=>{navigation.navigate('Graph')}}
            />
        </View>
    )
}

export default Home