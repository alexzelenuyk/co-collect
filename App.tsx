import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from "./src/HomeScreen";
import {ScanScreen} from "./src/ScanScreen";
import {GenerateScreen} from "./src/GenerateScreen";

const Stack = createStackNavigator();

const App = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Scan" component={ScanScreen}/>
            <Stack.Screen name="Generate" component={GenerateScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;
