import React from 'react'
import { View, Text, Button } from 'react-native'
const SettingsScreen = ({navigation}) => {
    return (
        <View>
            
            <Button color="#147845"
                title='Ir a mi perfil'
                onPress = {()=>{navigation.navigate('Login')}}
            />
            <Button color="#147845"
                title='Graficos'
                onPress = {()=>{navigation.navigate('Graph')}}
            />
        </View>
    )
}

export default SettingsScreen