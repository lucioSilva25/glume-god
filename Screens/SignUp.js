import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider } from "native-base";

const SignUp = ({navigation}) => {
  return <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button onPress = {()=>{navigation.navigate('Home')}} mt="2" colorScheme="indigo">
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
    