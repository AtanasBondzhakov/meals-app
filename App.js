import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from './screens/CategoriesScreen.js';
import MealsOverviewScreen from './screens/MealsOverviewScreen.js';

const Stack = createStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style='dark' />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='MealCategories' component={CategoriesScreen} />
                    <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}