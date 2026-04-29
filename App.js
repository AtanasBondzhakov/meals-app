import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from './screens/CategoriesScreen.js';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style='dark' />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='MealCategories' component={CategoriesScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#fff'
    // },
});
