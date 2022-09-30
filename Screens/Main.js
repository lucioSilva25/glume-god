import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Box, Heading, VStack, FormControl, Input, Link, HStack, Center, NativeBaseProvider } from "native-base";
import { useNavigation } from "@react-navigation/native";
import CustomButton from '../components/CustomButton';


const Main = () => {

    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            <NativeBaseProvider>
                <Center w="100%">
                    <Box safeArea p="2" py="8" w="90%" maxW="290">
                   
                        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                            color: "warmGray.50"
                        }}>
                            Bienvenidos!
                        </Heading>
                        <Heading mt="1" _dark={{
                            color: "warmGray.200"
                        }} color="coolGray.600" fontWeight="medium" size="xs">
                            Iniciar Sesion como:
                        </Heading>

                        <VStack>
                            
                            <CustomButton text={'Medico'} onPress={() => navigation.navigate('LoginMedico')} />
                            <CustomButton text={'Paciente'} onPress={() => navigation.navigate('LoginPaciente')} />

                            <HStack mt="6" justifyContent="center">
                                <Text fontSize="sm" color="coolGray.600" _dark={{
                                    color: "warmGray.200"
                                }}>
                                    ¿No tienes cuenta?.{" "}
                                </Text>
                                <Link onPress={() => { navigation.navigate('SignUp') }} _text={{
                                    color: "indigo.500",
                                    fontWeight: "medium",
                                    fontSize: "sm"
                                }} href="#">
                                    Regístrate
                                </Link>

                            </HStack>
                        </VStack>
                    </Box>
                </Center>
            </NativeBaseProvider>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});

export default Main;
