import HomeList from './HomeList/HomeList';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ItemDetail from './ItemDetail/ItemDetail';

const AppStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Inicio" component={HomeList}></AppStack.Screen>
        <AppStack.Screen name="Detalle" component={ItemDetail}></AppStack.Screen>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
