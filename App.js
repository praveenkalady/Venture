import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MainNavigation from './navigations/DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigator } from './navigations/StackNavigations';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'teal',
  },
};


function App(){
  return (
    <PaperProvider theme={theme} >
      <NavigationContainer>
      <AuthNavigator/>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App;
