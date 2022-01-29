import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Chat from './src/Screens/Chat';
import Home from './src/Screens/Home';
import Contact from './src/Screens/Contact';

import {NavigationContainer} from "@react-navigation/native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name='Home' component={Home}/>
                    <Tab.Screen name='Chat' component={Chat}/>
                    <Tab.Screen name='Contact' component={Contact}/>
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

