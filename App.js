import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importar las pantallas
import PantallaInicio from './screens/PantallaInicio';
import InicioSesion from './screens/InicioSesion';
import Registro from './screens/Registro';

import FeedPantalla from './screens/FeedPantalla';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailScreen from './screens/DetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={FeedPantalla} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={PantallaInicio} options={{ title: 'Iniciar Sesión' }} />
        <Stack.Screen name="InicioSesion" component={InicioSesion} options={{ title: 'Inicio de Sesión' }} />
        <Stack.Screen name="Registro" component={Registro} options={{ title: 'Registro' }} />
        
       
        <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />

        
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ title: 'Detalles' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
