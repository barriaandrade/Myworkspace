import HomeList from './HomeList/HomeList';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <HomeList></HomeList>
    </NavigationContainer>
      
  );
};

export default App;
