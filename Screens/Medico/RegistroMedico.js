import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider } from "native-base";

const RegistroMedico = ({navigation}) => {
  return <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Bienvenido Medico!
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Registrate para continuar
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Contraseña</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirmar contraseña</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button onPress = {()=>{navigation.navigate('Home')}} mt="2" colorScheme="green">
            Ingresa
          </Button>
          
        </VStack>
      </Box>
    </Center>;
};

    export default ({navigation}) => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <RegistroMedico navigation={navigation} />
            </Center>
          </NativeBaseProvider>
        );
    };
    