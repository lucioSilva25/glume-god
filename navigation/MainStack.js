import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Profile from '../Screens/Profile'; 
import Home from '../Screens/Home';
import SignUp from '../Screens/SignUp';
import Graph from '../Screens/Graph';
import MainContainer from './MainContainer';

const Stack = createNativeStackNavigator();

const MainStack = () => {
    return(
                <Stack.Navigator >

                    <Stack.Screen
                        name = 'Profile'
                        component = {Profile}
                    />
                    <Stack.Screen
                        name = 'SignUp'
                        component = {SignUp}
                    />

                    <Stack.Screen 
                    name='Container'
                    component={MainContainer}
                    />
                    
                    
                 
                </Stack.Navigator>
    )
}

export default MainStack