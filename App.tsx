import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pokedex from './src/Pages/Pokedex';
import {ThemeProvider} from 'styled-components';
import {AppTheme} from './src/config/Theme';
import {Routes} from './src/config/Routes';
import {AppProvider} from './src/context/AppContext';

export const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <ThemeProvider theme={AppTheme}>
      <AppProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={Routes.Pokedex}
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name={Routes.Pokedex}
              component={Pokedex}
              options={{
                contentStyle: {backgroundColor: AppTheme.colors.background},
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
