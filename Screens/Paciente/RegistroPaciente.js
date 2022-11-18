import * as React from "react";
import { Box, Heading, Select , VStack, FormControl,CheckIcon,  Input, Button, Center, NativeBaseProvider } from "native-base";

const SignUp = ({navigation}) => {
  return <Center w="100%">

      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Bienvenido!
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

          <FormControl w="3/4" maxW="300" isRequired isInvalid>
        <FormControl.Label>Grupo Sanguineo</FormControl.Label>
        <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="1">
          <Select.Item label="A+" value="A+" />
          <Select.Item label="AB+" value="AB+" />
          <Select.Item label="B-" value="B-" />
          <Select.Item label="O+" value="O+" />
        </Select>
        <FormControl.ErrorMessage>
          Por favor eleigr una opcion!
          </FormControl.ErrorMessage>
      </FormControl>

      <Input keyboardType="numeric" variant="Peso(Kg)" placeholder="Peso(Kg)" />


          <Button onPress = {()=>{navigation.navigate('Container')}} mt="2" colorScheme="green">
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
                <SignUp navigation={navigation} />
            </Center>
          </NativeBaseProvider>
        );
    };
    