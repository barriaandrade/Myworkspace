import HomeList from './HomeList/HomeList';
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ItemDetail from './ItemDetail/ItemDetail';
import Home from './Home/Home';

const AppStack = createStackNavigator();
const AuthStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#d96465',
          },
          headerBackTitleStyle: {
            color: 'black',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            color: 'black'
          }
        }}>
        <AppStack.Screen
          name="HomeList"
          component={HomeList}
          options={{title: 'Lista de libros'}}></AppStack.Screen>
        <AuthStack.Screen
          name="ItemDetail"
          component={ItemDetail}
          options={{title: 'Detalle'}}></AuthStack.Screen>
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{title: 'Inicio'}}></AppStack.Screen>
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
