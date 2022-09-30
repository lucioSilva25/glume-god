import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Screens/Login';
import Home from '../Screens/Home';
import SignUp from '../Screens/SignUp';
import Graph from '../Screens/Graph';
import MainContainer from './MainContainer';
import Main from '../Screens/Main';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator >

            <Stack.Screen
                name='Main'
                component={Main}
            />

            <Stack.Screen
                name='Login'
                component={Login}
            />
            <Stack.Screen
                name='SignUp'
                component={SignUp}
            />

            <Stack.Screen
                name='Container'
                component={MainContainer}
            />



        </Stack.Navigator>
    )
}

export default MainStack