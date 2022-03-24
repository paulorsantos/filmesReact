import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TelaA from './src/TelaA';
import TelaB from './src/TelaB';

const Stack = createStackNavigator();

function MyApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={TelaA} name="TelaA"/>
                <Stack.Screen component={TelaB} name="TelaB"/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyApp;