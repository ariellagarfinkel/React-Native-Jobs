import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Signup } from './signup';
import { Login } from './login';
import { Logout } from './logout';
import { Favorites } from './favorites';

// const { Navigator } = createNativeStackNavigator();
const Stack = createNativeStackNavigator();


const Navigation = () => {
    return (
     <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="signup" component={Signup}></Stack.Screen>
            <Stack.Screen name="login" component={Login}></Stack.Screen>
            <Stack.Screen name="logout" component={Logout}></Stack.Screen>
            <Stack.Screen name="favorites" component={Favorites}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Navigation;