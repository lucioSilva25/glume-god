import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Screens/Login';
import LoginMedico from '../Screens/Medico/LoginMedico';
import LoginPaciente from '../Screens/Paciente/LoginPaciente';
import RegistroMedico from '../Screens/Medico/RegistroMedico';
import RegistroPaciente from '../Screens/Paciente/RegistroPaciente';
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
                name='LoginMedico'
                component={LoginMedico}
            />
            <Stack.Screen
                name='LoginPaciente'
                component={LoginPaciente}
            />

            <Stack.Screen
                name='RegistroMedico'
                component={RegistroMedico}
            />

            <Stack.Screen
                name='RegistroPaciente'
                component={RegistroPaciente}
            />


            <Stack.Screen
                name='SignUp'
                component={SignUp}
            />

            <Stack.Screen
                name='Container'
                component={MainContainer}
            />

            <Stack.Screen
                name='Graph'
                component={Graph}
            />



        </Stack.Navigator>
    )
}

export default MainStack