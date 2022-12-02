import React from 'react'
import { View, Button, Image } from 'react-native'
import{NativeBaseProvider, Text, Avatar, HStack,VStack} from'native-base'


const DetailsScreen = ({navigation}) => {
    return (
        <View>

        <NativeBaseProvider>
            
            <Button color="#147845" 
                title='Modificar mis datos de registro'
                onPress = {()=>{navigation.navigate('RegistroPaciente')}} />
            <Text> Luca Pablo </Text>
            
             <Avatar marginTop="20px" alignSelf="center" size="xl" source={{
            uri: "https://www.finedininglovers.it/sites/g/files/xknfdk1106/files/styles/open_graph_image/public/fdl_content_import_it/luca-sacchi.jpg?itok=KZld-OLy" }}> NB
        <Avatar.Badge bg="green.500" />
            </Avatar>

            <Button color="#147845"
                title='Ir a Graficos'
                onPress = {()=>{navigation.navigate('Graph')}}
 />

        </NativeBaseProvider>

        </View>
    )
}

export default DetailsScreen